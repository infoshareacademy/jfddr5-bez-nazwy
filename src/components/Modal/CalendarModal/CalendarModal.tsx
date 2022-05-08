import { Dispatch, SetStateAction } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useBusinessItemContext } from "../../../contexts/BusinessItemContext";
import { useCurrentUserContext } from "../../../contexts/CurrentUserContext";
import { useModalDisplayContext } from "../../../contexts/ModalDisplayContext";
import { useServiceItemContext } from "../../../contexts/ServiceItemContext";
import { getReservedSlots, UsersReservationsPerDay } from "../../../utils/db";
import { formatDate } from "../../../utils/formatDate";
import styles from "./CalendarModal.module.css";

interface Props {
	setShowLogin: Dispatch<SetStateAction<boolean>>;
	setShowRegister: Dispatch<SetStateAction<boolean>>;
	usersReservations: UsersReservationsPerDay[];
	setUsersReservations: Dispatch<SetStateAction<UsersReservationsPerDay[]>>;
	date: Date | null;
	setDate: Dispatch<SetStateAction<Date | null>>;
}

const CalendarModal = ({
	setShowLogin,
	setShowRegister,
	usersReservations,
	setUsersReservations,
	date,
	setDate,
}: Props) => {
	const [currentUser] = useCurrentUserContext();

	const [, setDisplayModal] = useModalDisplayContext();
	const [activeService] = useServiceItemContext();
	const [activeBusiness] = useBusinessItemContext();

	const handleDayClicked = (value: Date) => {
		getReservedSlots(
			activeBusiness.id,
			activeService.id,
			setUsersReservations,
			value,
		);
		setDate(value);
	};

	const handleUserForm = (
		callback: Dispatch<SetStateAction<boolean>>,
	): void => {
		setDisplayModal("user-form");
		callback(true);
		setDate(null);
	};

	const handleReservationClick = () => {
		if (currentUser && usersReservations.length < activeService.slot) {
			setDisplayModal("reservation-confirm");
		}
	};
	return (
		<div
			className={styles.calendarModalContent}
			onClick={(e) => e.stopPropagation()}>
			<h2>Wybierz dzień</h2>
			<Calendar
				tileDisabled={({ date }) => {
					return (
						date.getDay() === 0 ||
						date.getDay() === 6 ||
						date <= new Date()
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
