import { useContext, useEffect, useState } from "react";
import { businessItemContext } from "../contexts/BusinessItemContext";
import { serviceItemContext } from "../contexts/ServiceItemContext";
import {
	getServiceForUser,
	getReservedSlots,
	deleteServiceForUser,
	auth,
	db,
	updateCalendarForService,
	getUsersReservations,
} from "../utils/db";
import s from "./ProfileView.module.css";

const ProfileView = ({ usersReservations, setUsersReservations }) => {
	const [serviceForUser, setServiceForUser] = useState([]);
	const [activeBusiness] = useContext(businessItemContext);
	const [activeService] = useContext(serviceItemContext);
	const [usersList, setUsersList] = useState([]);

	useEffect(() => {
		getServiceForUser(setServiceForUser);
		console.log(usersReservations);
	}, []);

	useEffect(() => {
		getReservedSlots();
	});

	const handleDelete = async (
		businessId,
		serviceId,
		reservationId,
		dateId,
		time,
		callback,
	) => {
		await getReservedSlots(businessId, serviceId, callback, dateId).then(
			() => {
				deleteServiceForUser(reservationId, setServiceForUser);
				updateCalendarForService(
					businessId,
					serviceId,
					dateId,
					usersList,
					time,
				);
			},
		);
	};
	console.log(serviceForUser);
	return (
		<div className={s.profileView}>
			ProfileView{" "}
			<div>
				<h2 className={s.title}>Lista rezerwacji:</h2>
				{serviceForUser.map((reservation) => (
					<div key={reservation.id} className={s.reservationRow}>
						<div className={s.reservationField}>
							<div className={s.businessName}>
								{reservation.businessName}
							</div>
							<div className={s.serviceName}>
								{reservation.serviceName}
							</div>
							<div className={s.reservationDate}>
								{reservation.date.toString()}
							</div>
							<button
								className={s.button}
								onClick={() =>
									handleDelete(
										reservation.businessId,
										reservation.serviceId,
										reservation.id,
										reservation.date,
										reservation.id,
										setUsersList,
									)
								}>
								Usuń rezerwację
							</button>
						</div>

						<div className={s.line} />
					</div>
				))}
				<button onClick={() => console.log(usersList)}>blka</button>
			</div>
		</div>
	);
};

export default ProfileView;
