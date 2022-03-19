import { initializeApp } from "firebase/app";
import {
	getFirestore,
	setDoc,
	doc,
	collection,
	getDocs,
	updateDoc,
	arrayUnion,
	deleteDoc,
	arrayRemove,
} from "firebase/firestore";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDyt3k2BzoM2Oav67VHJh38Dbtp3T0Vn_4",
	authDomain: "petsy-83eb2.firebaseapp.com",
	projectId: "petsy-83eb2",
	storageBucket: "petsy-83eb2.appspot.com",
	messagingSenderId: "532767807611",
	appId: "1:532767807611:web:27e9f43aff9486ae14aade",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const registerUser = async (username, email, password, city) => {
	let registerErrorMessage;
	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		const user = response.user;
		await setDoc(doc(db, "users", user.uid), {
			username,
			authProvider: "local",
			email,
			city,
		});
	} catch (error) {
		switch (error.code) {
			case "auth/weak-password":
				registerErrorMessage =
					"Hasło musi mieć min. 6 znaków długości.";
				break;
			case "auth/invalid-email":
				registerErrorMessage = "Podany adres e-mail jest niepoprawny.";
				break;
			case "auth/email-already-in-use":
				registerErrorMessage = "Podany adres e-mail jest już w użyciu.";
				break;
			case "auth/internal-error":
				registerErrorMessage =
					"Napotkaliśmy niespodziewany błąd, proszę spróbuj ponownie.";
				break;
			default:
		}
		return registerErrorMessage;
	}
};

const loginUser = async (email, password) => {
	let loginErrorMessage;
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		switch (error.code) {
			case "auth/wrong-password":
				loginErrorMessage =
					"Niepoprawne hasło, proszę spróbuj ponownie.";
				break;
			case "auth/invalid-email":
				loginErrorMessage = "Podany adres e-mail jest nieprawidłowy.";
				break;
			case "auth/user-not-found":
				loginErrorMessage = "Nie znaleziono użytkownika.";
				break;
			default:
		}
		return loginErrorMessage;
	}
};

const logoutUser = () => {
	signOut(auth);
};

const getUsers = async (callback) => {
	const usersSnapshot = await getDocs(collection(db, "users"));
	const usersList = usersSnapshot.docs.map((doc) => ({
		uid: doc.id,
		city: doc.data().city,
		email: doc.data().email,
		username: doc.data().username,
	}));
	callback(usersList);
};

const getBusinessList = async (callback) => {
	const businessSnapshot = await getDocs(collection(db, "business")).catch(
		() =>
			fetch("http://localhost:3000/sampleData.json")
				.then((res) => res.json())
				.then((docs) => callback(docs.documents)),
	);

	const businessList = businessSnapshot.docs.map((doc) => ({
		id: doc.id,
		name: doc.data().name,
		category: doc.data().category,
		city: doc.data().city,
		contact: doc.data().contact,
		photo: doc.data().photo,
		info: doc.data().info,
	}));
	callback(businessList);
};

const getServicesList = async (callback, id) => {
	const servicesSnapshot = await getDocs(
		collection(db, `business/${id}/services`),
	).catch(() =>
		fetch("http://localhost:3000/sampleData.json")
			.then((res) => res.json())
			.then((docs) =>
				callback([
					{
						services: docs.collections.services,
						businessId: docs.collections.id,
					},
				]),
			),
	);

	const servicesList = servicesSnapshot.docs.map((doc) => ({
		id: doc.id,
		name: doc.data().name,
		price: doc.data().price,
		slot: doc.data().slot,
	}));

	callback((prevValue) => [
		...prevValue,
		{ services: [...servicesList], businessId: id },
	]);
};

const getRating = async (callback, id) => {
	const ratingSnapshot = await getDocs(
		collection(db, `business/${id}/rating`),
	).catch(() =>
		fetch("http://localhost:3000/sampleData.json")
			.then((res) => res.json())
			.then((docs) =>
				callback([
					{
						rating: docs.collections.rating,
						businessId: docs.collections.id,
					},
				]),
			),
	);
	const ratingList = ratingSnapshot.docs.map((doc) => ({
		id: doc.id,
		user: doc.data().user,
		value: doc.data().value,
		comment: doc.data().comment,
	}));
	callback((prevValue) => {
		if (prevValue.some((value) => value.businessId === id)) {
			return prevValue.map((value) => {
				if (value.businessId === id) {
					return { businessId: id, rating: ratingList };
				}
				return value;
			});
		} else {
			return [...prevValue, { rating: [...ratingList], businessId: id }];
		}
	});
};

const setCalendarForService = async (
	businessId,
	serviceId,
	dateId,
	date,
	user,
) => {
	await setDoc(
		doc(
			db,
			`business/${businessId}/services/${serviceId}/calendar`,
			dateId,
		),
		{
			date: date,
			usersReservations: arrayUnion({
				user,
				time: new Date().toLocaleString("pl-PL"),
			}),
		},
		{ merge: true },
	);
};

const setServiceForUser = async (
	reservationId,
	date,
	businessId,
	businessName,
	serviceId,
	serviceName,
	dateNow,
) => {
	await setDoc(
		doc(db, "users", auth.currentUser.uid, "reservations", reservationId),
		{
			date: date,
			business: {
				id: businessId,
				name: businessName,
			},
			service: {
				id: serviceId,
				name: serviceName,
			},
			id: dateNow,
		},
	);
};

const getReservedSlots = async (businessId, serviceId, callback, dateId) => {
	const reservationsPerDaySnapshot = await getDocs(
		collection(db, `business/${businessId}/services/${serviceId}/calendar`),
	);

	const reservationsPerDay = reservationsPerDaySnapshot.docs.map((doc) => ({
		id: doc.id,
		usersReservations: doc.data().usersReservations,
		date: doc.data().date,
	}));

	const slotItem = reservationsPerDay.find(
		(slot) => slot.id === dateId.toLocaleString("pl-PL"),
	);
	callback(() => (slotItem ? slotItem.usersReservations : []));
};

const getServiceForUser = async (callback) => {
	const userReservationDocuments = await getDocs(
		collection(db, "users", auth.currentUser.uid, "reservations"),
	);
	const userReservationsList = userReservationDocuments.docs.map((doc) => ({
		id: doc.id,
		date: doc.data().date,
		businessName: doc.data().business.name,
		businessId: doc.data().business.id,
		serviceName: doc.data().service.name,
		serviceId: doc.data().service.id,
	}));
	callback(userReservationsList);
};
const deleteServiceForUser = async (docId, callback) => {
	await deleteDoc(
		doc(db, "users", auth.currentUser.uid, "reservations", docId),
	);
	getServiceForUser(callback);
};

const updateCalendarForService = async (
	businessId,
	serviceId,
	dateId,
	item,
) => {
	await updateDoc(
		doc(
			db,
			`business/${businessId}/services/${serviceId}/calendar`,
			dateId,
		),
		{
			usersReservations: arrayRemove(item),
		},
	);
};

//adding opinions
const addOpinion = async (businessId, businessName, comment, value, login) => {
	const dateNow = new Date().toLocaleString("pl-PL");
	await setDoc(doc(db, `business/${businessId}/rating`, dateNow), {
		comment: comment,
		user: login,
		value: value,
	});
	await setDoc(doc(db, `users/${auth.currentUser.uid}/opinions`, dateNow), {
		business: {
			name: businessName,
			id: businessId,
		},

		comment: comment,
		value: value,
	});
};

export {
	db,
	auth,
	registerUser,
	loginUser,
	logoutUser,
	getBusinessList,
	getServicesList,
	getRating,
	setCalendarForService,
	setServiceForUser,
	getReservedSlots,
	getServiceForUser,
	deleteServiceForUser,
	updateCalendarForService,
	addOpinion,
	getUsers,
};
