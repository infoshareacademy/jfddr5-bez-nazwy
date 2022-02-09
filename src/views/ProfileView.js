import { deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getServiceForUser, deleteServiceForUser, auth, db } from "../utils/db";
import s from "./ProfileView.module.css";
const ProfileView = () => {
	const [serviceForUser, setServiceForUser] = useState([]);

	useEffect(() => {
		getServiceForUser(setServiceForUser);
		console.log(serviceForUser);
	}, []);
	return (
		<div>
			ProfileView{" "}
			<div>
				<h2>Lista rezerwacji:</h2>
				{serviceForUser.map((reservation) => (
					<div key={reservation.date} className={s.reservationField}>
						<div>{reservation.businessName}</div>
						<div>{reservation.serviceName}</div>
						<div>{reservation.date.toString()}</div>
						<button
							onClick={() =>
								deleteServiceForUser(reservation.date)
							}>
							Usuń rezerwację
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfileView;
