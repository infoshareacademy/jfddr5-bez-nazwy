import { useBusinessItemContext } from "../../../contexts/BusinessItemContext";
import { useCurrentUserContext } from "../../../contexts/CurrentUserContext";
import { useModalDisplayContext } from "../../../contexts/ModalDisplayContext";
import { useServiceItemContext } from "../../../contexts/ServiceItemContext";
import { setCalendarForService, setServiceForUser } from "../../../utils/db";
import { formatDate } from "../../../utils/formatDate";
import styles from "./ReservationConfirm.module.css";

interface Props {
	date: Date;
}

const ReservationConfirm = ({ date }: Props) => {
	const [, setDisplayModal] = useModalDisplayContext();
	const [activeBusiness] = useBusinessItemContext();
	const [activeService] = useServiceItemContext();
	const [currentUser] = useCurrentUserContext();

	const handleReservation = () => {
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
