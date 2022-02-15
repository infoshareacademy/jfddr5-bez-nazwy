import { useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { businessItemContext } from "../../../contexts/BusinessItemContext";
import { currentUserContext } from "../../../contexts/CurrentUserContext";
import { modalDisplayContext } from "../../../contexts/ModalDisplayContext";
import { serviceItemContext } from "../../../contexts/ServiceItemContext";
import { getReservedSlots } from "../../../utils/db";
import { formatDate } from "../../../utils/formatDate";
import styles from "./CalendarModal.module.css";

const CalendarModal = ({
	setShowLogin,
	setShowRegister,
	usersReservations,
	setUsersReservations,
	date,
	setDate,
}) => {
	const [currentUser] = useContext(currentUserContext);

	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
	const [activeService] = useContext(serviceItemContext);
	const [activeBusiness] = useContext(businessItemContext);

	const handleDayClicked = (value) => {
		getReservedSlots(
			activeBusiness.id,
			activeService.id,
			setUsersReservations,
			value,
		);
		setDate(value);
	};

	const handleUserForm = (callback) => {
		setDisplayModal("user-form");
		callback(true);
		setDate("");
	};

	const handleReservationClick = () => {
		const dateNow = new Date().toLocaleString("pl-PL");

		if (currentUser && usersReservations.length < activeService.slot) {
			setDisplayModal("reservation-confirm");
		}
	};
	return (
		//todo: disabled niedziele i soboty
		<div
			className={styles.calendarModalContent}
			onClick={(e) => e.stopPropagation()}>
			<h2>Wybierz dzień</h2>
			<Calendar
				tileDisabled={({ activeStartDate, date, view }) => {
					return (
						date.getDay() === 0 ||
						date.getDay() === 6 ||
						date <= Date.now()
					);
				}}
				onClickDay={handleDayClicked}
				className={styles.calendar}
				tileClassName={styles.calendarTile}
				locale="pl-PL"
			/>

			<div className={styles.reservationDetails}>
				<p>
					Data wizyty:
					<span>{date ? ` ${formatDate(date)}` : ""}</span>
				</p>
				<p>
					Ilość wolnych miejsc:
					<span>
						{date
							? ` ${usersReservations.length}/${activeService.slot}`
							: ""}
					</span>
				</p>
				<p>
					Cena: <span>{activeService.price}zł</span>
				</p>

				{currentUser ? (
					<button
						className={styles.reservationButton}
						onClick={handleReservationClick}
						disabled={
							!date ||
							usersReservations.length >= activeService.slot
						}>
						{usersReservations.length < activeService.slot
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
