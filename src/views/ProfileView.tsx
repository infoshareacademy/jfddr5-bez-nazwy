import {
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";
import Footer from "../components/Footer/Footer";
import FixedNavbar from "../components/Header/FixedNavbar/FixedNavbar";
import {
	currentUserContext,
	useCurrentUserContext,
} from "../contexts/CurrentUserContext";
import {
	getServiceForUser,
	deleteServiceForUser,
	updateCalendarForService,
	UserReservations,
	UsersReservationsPerDay,
} from "../utils/db";
import { formatDate } from "../utils/formatDate";
import styles from "./ProfileView.module.css";

interface Props {
	city: string;
	setCity: Dispatch<SetStateAction<string>>;
	setCategory: Dispatch<SetStateAction<string>>;
	setShowLogin: Dispatch<SetStateAction<boolean>>;
	setShowRegister: Dispatch<SetStateAction<boolean>>;
}

const ProfileView = ({
	city,
	setCity,
	setCategory,
	setShowLogin,
	setShowRegister,
}: Props) => {
	const [serviceForUser, setServiceForUser] = useState<UserReservations[]>(
		[],
	);
	const [currentUser] = useCurrentUserContext();

	useEffect(() => {
		getServiceForUser(setServiceForUser);
	}, []);

	const handleDelete = async (
		businessId: string,
		serviceId: string,
		reservationId: string,
		dateId: string,
		item: {
			user: string;
			time: Date;
		},
	) => {
		deleteServiceForUser(reservationId, setServiceForUser);
		updateCalendarForService(businessId, serviceId, dateId, item);
	};
	return (
		<div>
			<FixedNavbar
				setCategory={setCategory}
				setCity={setCity}
				city={city}
				setShowLogin={setShowLogin}
				setShowRegister={setShowRegister}
			/>
			<div className={styles.profileView}>
				<div>
					<h2 className={styles.title}>Lista rezerwacji:</h2>
					{serviceForUser.map((reservation) => {
						const item = {
							user: currentUser.uid,
							time: reservation.id.toLocaleString("pl-PL"),
						};
						return (
							<div
								key={reservation.id}
								className={styles.reservationRow}>
								<div className={styles.reservationField}>
									<div className={styles.businessName}>
										{reservation.businessName}
									</div>
									<div className={styles.serviceName}>
										{reservation.serviceName}
									</div>
									<div className={styles.reservationDate}>
										{formatDate(reservation.date)}
									</div>
									<button
										className={styles.button}
										onClick={() =>
											handleDelete(
												reservation.businessId,
												reservation.serviceId,
												reservation.id,
												reservation.date,
												item,
											)
										}>
										Usuń rezerwację
									</button>
								</div>

								<div className={styles.line} />
							</div>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProfileView;
