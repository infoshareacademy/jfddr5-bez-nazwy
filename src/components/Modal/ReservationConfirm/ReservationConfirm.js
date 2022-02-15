import { useContext } from "react";
import { businessItemContext } from "../../../contexts/BusinessItemContext";
import { currentUserContext } from "../../../contexts/CurrentUserContext";
import { modalDisplayContext } from "../../../contexts/ModalDisplayContext";
import { serviceItemContext } from "../../../contexts/ServiceItemContext";
import { setCalendarForService, setServiceForUser } from "../../../utils/db";
import { formatDate } from "../../../utils/formatDate";
import styles from "./ReservationConfirm.module.css";

const ReservationConfirm = ({ date }) => {
	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
	const [activeBusiness] = useContext(businessItemContext);
	const [activeService] = useContext(serviceItemContext);
	const [currentUser] = useContext(currentUserContext);

	const handleReservation = (e) => {
		const dateNow = new Date().toLocaleString("pl-PL");
		setCalendarForService(
			activeBusiness.id,
			activeService.id,
			date.toLocaleString("pl-PL"),
			date,
			currentUser.uid,
		);
		setServiceForUser(
			dateNow,
			date.toLocaleString("pl-PL"),
			activeBusiness.id,
			activeBusiness.name,
			activeService.id,
			activeService.name,
			dateNow,
		);
		setDisplayModal("success-alert");
	};
	return (
		<div
			className={styles.confirmContent}
			onClick={(e) => e.stopPropagation()}>
			<p>
				Salon: {activeBusiness.name}, {activeBusiness.city}
			</p>
			<p>
				Typ wizyty: {activeService.name}, {activeService.price}zł
			</p>
			<p>Data wizyty: {date && ` ${formatDate(date)}`}</p>
			<p>Czy na pewno chcesz zarezerwować ten termin?</p>
			<button onClick={handleReservation}>Tak</button>
			<button onClick={() => setDisplayModal("")}>Nie</button>
		</div>
	);
};

export default ReservationConfirm;
