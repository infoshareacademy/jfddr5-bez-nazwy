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

const CalendarModal = ({ setShowLogin, setShowRegister, date, setDate }) => {
	const [currentUser] = useContext(currentUserContext);

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
		if (currentUser && reservedSlots < activeService.slot) {
			setDisplayModal("reservation-confirm");
		} else if (reservedSlots === activeService.slot) {
			console.log("zajete");
		}
	};
	return (
		//todo: disabled niedziele i soboty
		<div
			className={styles.calendarModalContent}
			onClick={(e) => e.stopPropagation()}>
			<h2>Wybierz dzień</h2>
			<Calendar
				onClickDay={handleDayClicked}
				className={styles.calendar}
				tileClassName={styles.calendarTile}
			/>

			<div className={styles.reservationDetails}>
				<p>
					Data wizyty:
					<span>{date ? ` ${date.toLocaleString()}` : ""}</span>
				</p>
				<p>
					Ilość wolnych miejsc:
					<span>
						{date ? ` ${reservedSlots}/${activeService.slot}` : ""}
					</span>
				</p>
				<p>
					Cena: <span>{activeService.price}zł</span>
				</p>

				{currentUser ? (
					<button
						className={styles.reservationButton}
						onClick={handleReservationClick}
						disabled={reservedSlots >= activeService.slot}>
						{reservedSlots < activeService.slot
							? "Zarezerwuj miejsce"
							: "Brak wolnych miejsc"}
					</button>
				) : (
					<div>
						<button
							className={styles.loginButton}
							onClick={() => handleUserForm(setShowLogin)}>
							Zaloguj się
						</button>

						<button
							className={styles.loginButton}
							onClick={() => handleUserForm(setShowRegister)}>
							Zarejestruj się
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default CalendarModal;
