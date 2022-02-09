import { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { businessItemContext } from "../../../contexts/BusinessItemContext";
import { currentUserContext } from "../../../contexts/CurrentUserContext";
import { modalDisplayContext } from "../../../contexts/ModalDisplayContext";
import { serviceItemContext } from "../../../contexts/ServiceItemContext";
import {
	getReservedSlots,
	setCalendarForService,
	setServiceForUser,
} from "../../../utils/db";
import styles from "./CalendarModal.module.css";

const CalendarModal = ({ setShowLogin, setShowRegister }) => {
	const [currentUser] = useContext(currentUserContext);
	const [date, setDate] = useState("");
	const [reservedSlots, setReservedSlots] = useState(0);
	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
	const [activeService] = useContext(serviceItemContext);
	const [activeBusiness] = useContext(businessItemContext);

	const handleDayClicked = (value) => {
		getReservedSlots(
			activeBusiness.id,
			activeService.id,
			setReservedSlots,
			value,
		);
		setDate(value);
	};

	const handleUserForm = (callback) => {
		setDisplayModal("user-form");
		callback(true);
	};

	const handleReservationClick = () => {
		const dateNow = new Date().toLocaleString("pl-PL");

		if (currentUser && reservedSlots < activeService.slot) {
			setCalendarForService(
				activeBusiness.id,
				activeService.id,
				date.toLocaleString("pl-PL"),
				date,
				currentUser.uid,
			);
			setServiceForUser(
				dateNow,
				date,
				activeBusiness.id,
				activeBusiness.name,
				activeService.id,
				activeService.name,
			);
			setDisplayModal("");
		} else if (reservedSlots === activeService.slot) {
			console.log("zajete");
		}
	};
	return (
		//todo: disabled niedziele i soboty
		<div
			className={styles.calendarModalContent}
			onClick={(e) => e.stopPropagation()}>
			<Calendar onClickDay={handleDayClicked} />
			{date && (
				<>
					<p>Data wizyty: {date.toLocaleString()}</p>
					<p>
						Ilość wolnych miejsc: {reservedSlots}/
						{activeService.slot}
					</p>
					<p>Cena: {activeService.price}zł</p>

					{currentUser ? (
						<button
							onClick={handleReservationClick}
							disabled={reservedSlots >= activeService.slot}>
							Zarezerwuj miejsce
						</button>
					) : (
						<div>
							<button
								onClick={() => handleUserForm(setShowLogin)}>
								Zaloguj się
							</button>

							<button
								onClick={() => handleUserForm(setShowRegister)}>
								Zarejestruj się
							</button>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default CalendarModal;
