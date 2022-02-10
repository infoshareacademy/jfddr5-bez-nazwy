import { useContext, useEffect, useState } from "react";
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

const CalendarModal = ({
	setShowLogin,
	setShowRegister,
	usersReservations,
	setUsersReservations,
}) => {
	const [currentUser] = useContext(currentUserContext);
	const [date, setDate] = useState("");
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

	useEffect(() => {
		console.log(usersReservations);
	}, [date]);
	const handleUserForm = (callback) => {
		setDisplayModal("user-form");
		callback(true);
	};

	const handleReservationClick = () => {
		const dateNow = new Date().toLocaleString("pl-PL");

		if (currentUser && usersReservations.length < activeService.slot) {
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

			setDisplayModal("");
		} else if (usersReservations.length === activeService.slot) {
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
						Ilość wolnych miejsc: {usersReservations.length}/
						{activeService.slot}
					</p>
					<p>Cena: {activeService.price}zł</p>

					{currentUser ? (
						<button
							onClick={handleReservationClick}
							disabled={
								usersReservations.length >= activeService.slot
							}>
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
