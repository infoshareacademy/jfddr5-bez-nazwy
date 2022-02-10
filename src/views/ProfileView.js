import { useEffect, useState } from "react";
import { getServiceForUser, deleteServiceForUser, auth, db } from "../utils/db";
import s from "./ProfileView.module.css";
const ProfileView = () => {
	const [serviceForUser, setServiceForUser] = useState([]);

	useEffect(() => {
		getServiceForUser(setServiceForUser);
	}, []);
	console.log(serviceForUser);
	return (
		<div className={s.profileView}>
			<div>
				<h2 className={s.title}>Lista rezerwacji:</h2>
				{serviceForUser.map((reservation) => (
					<div className={s.reservationRow}>
						<div
							key={reservation.date}
							className={s.reservationField}>
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
									deleteServiceForUser(reservation.date)
								}>
								Usuń rezerwację
							</button>
						</div>
						<div className={s.line} />
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfileView;
