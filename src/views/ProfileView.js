import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import FixedNavbar from "../components/Header/FixedNavbar/FixedNavbar";
import { currentUserContext } from "../contexts/CurrentUserContext";
import {
	getServiceForUser,
	deleteServiceForUser,
	updateCalendarForService,
} from "../utils/db";
import { formatDate } from "../utils/formatDate";
import styles from "./ProfileView.module.css";

const ProfileView = ({
	product,
	setProduct,
	city,
	setCity,
	setCategory,
	showLogin,
	setShowLogin,
	showRegister,
	setShowRegister,
}) => {
	const [serviceForUser, setServiceForUser] = useState([]);
	const [currentUser] = useContext(currentUserContext);

	useEffect(() => {
		getServiceForUser(setServiceForUser);
	}, []);

	const handleDelete = async (
		businessId,
		serviceId,
		reservationId,
		dateId,
		item,
	) => {
		deleteServiceForUser(reservationId, setServiceForUser);
		updateCalendarForService(businessId, serviceId, dateId, item);
	};
	return (
		<div>
			<FixedNavbar
				setProduct={setProduct}
				product={product}
				setCategory={setCategory}
				setCity={setCity}
				city={city}
				currentUser={currentUser}
				showLogin={showLogin}
				setShowLogin={setShowLogin}
				showRegister={showRegister}
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
