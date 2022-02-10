import { useContext, useEffect, useState } from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";
import {
	getServiceForUser,
	deleteServiceForUser,
	updateCalendarForService,
} from "../utils/db";
import s from "./ProfileView.module.css";

const ProfileView = () => {
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
		<div className={s.profileView}>
			<div>
				<h2 className={s.title}>Lista rezerwacji:</h2>
				{serviceForUser.map((reservation) => {
					const item = {
						user: currentUser.uid,
						time: reservation.id.toLocaleString("pl-PL"),
					};
					return (
						<div key={reservation.id} className={s.reservationRow}>
							<div className={s.reservationField}>
								<div className={s.businessName}>
									{reservation.businessName}
								</div>
								<div className={s.serviceName}>
									{reservation.serviceName}
								</div>
								<div className={s.reservationDate}>
									{reservation.date.toString().slice(0, 10)}
								</div>
								<button
									className={s.button}
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

							<div className={s.line} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProfileView;
