import { initializeApp } from "firebase/app";
import {
	getFirestore,
	setDoc,
	doc,
	collection,
	getDocs,
} from "firebase/firestore";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
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
		response.user.displayName = username;
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
			case "auth/email-already-exists":
				registerErrorMessage = "Podany adres e-mail jest już w użyciu.";
				break;
			case "auth/internal-error":
				registerErrorMessage =
					"Napotkaliśmy niespodziewany błąd, proszę spróbuj ponownie.";
				break;
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
		}
		return loginErrorMessage;
	}
};

const logoutUser = () => {
	signOut(auth);
};

export const getBusinessList = async (callback) => {
	const businessSnapshot = await getDocs(collection(db, "business"));
	console.log(businessSnapshot);
	const businessList = businessSnapshot.docs.map((doc) => ({
		id: doc.id,
		name: doc.data().name,
		category: doc.data().category,
		city: doc.data().city,
		contact: doc.data().contact,
	}));
	callback(businessList);
};

export { db, auth, registerUser, loginUser, logoutUser };
