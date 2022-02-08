import { useState, useContext } from "react";
import Calendar from "react-calendar";
import { currentUserContext } from "../../contexts/CurrentUserContext";
import s from "./CategoryList.module.css";
import { setCalendarForService, setServiceForUser } from "../../utils/db";
import "react-calendar/dist/Calendar.css";
import styles from "./CalendarModal.module.css";
import { getReservedSlots } from "../../utils/db";

const Service = ({ service, business, setShowLogin, showLogin }) => {
	const [displayCalendar, setDisplayCalendar] = useState(false);
	const [currentUser] = useContext(currentUserContext);
	const [date, setDate] = useState("");
	const [reservedSlots, setReservedSlots] = useState(0);

	const handleDayClicked = (value) => {
		getReservedSlots(business.id, service.id, setReservedSlots, value);
		setDate(value);
	};

	const handleReservationClick = () => {
		const dateNow = new Date().toLocaleString("pl-PL");

		if (currentUser && reservedSlots < service.slot) {
			setCalendarForService(
				business.id,
				service.id,
				date.toLocaleString("pl-PL"),
				date,
				currentUser.uid,
			);
			setServiceForUser(
				dateNow,
				date,
				business.id,
				business.name,
				service.id,
				service.name,
			);
			setDisplayCalendar(false);
		} else if (reservedSlots === service.slot) {
			console.log("zajete");
		}
	};

	return (
		<>
			<div key={service.id} className={s.servicesList}>
				<div className={s.servicesListName}>{service.name}</div>
				<div className={s.servicesListPrice}>{service.price}zł</div>
				<div className={s.servicesListPrice}>{service.slot}</div>
				<button
					className={s.servicesButton}
					onClick={() => setDisplayCalendar(!displayCalendar)}>
					Zarezerwuj
				</button>
				{displayCalendar && (
					<div
						className={styles.calendarModal}
						onClick={() => setDisplayCalendar(false)}>
						<div
							className={styles.calendarModalContent}
							onClick={(e) => e.stopPropagation()}>
							<Calendar onClickDay={handleDayClicked} />
							{date && (
								<>
									<p>Data wizyty: {date.toLocaleString()}</p>
									<p>
										Ilość wolnych miejsc: {reservedSlots}/
										{service.slot}
									</p>
									<p>Cena: {service.price}zł</p>

									{currentUser ? (
										<button
											onClick={handleReservationClick}
											disabled={
												reservedSlots >= service.slot
											}>
											Zarezerwuj miejsce
										</button>
									) : (
										<div>
											<button
												onClick={() =>
													setShowLogin(true)
												}>
												Zaloguj się
											</button>

											<button>Zarejestruj się</button>
										</div>
									)}
								</>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Service;
