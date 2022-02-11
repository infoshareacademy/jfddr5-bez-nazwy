import { useContext, useState } from "react";
import { modalDisplayContext } from "../../contexts/ModalDisplayContext";
import CalendarModal from "./CalendarModal/CalendarModal";
import { SearchBar } from "./SearchBarModal/SearchBar";
import UserFormModal from "./UserFormModal/UserFormModal";
import styles from "./Modal.module.css";
import ReservationConfirm from "./ReservationConfirm/ReservationConfirm";
import SuccessAlert from "./SuccessAlert/SuccessAlert";

const Modal = ({
	showLogin,
	showRegister,
	setShowLogin,
	setShowRegister,
	setCategory,
	setCity,
	city,
	usersReservations,
	setUsersReservations,
}) => {
	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
	const [date, setDate] = useState("");

	const handleModalDisplay = () => {
		setDisplayModal("");
		setDate("");
		setShowLogin(false);
		setShowRegister(false);
	};
	if (displayModal === "") {
		return null;
	}
	return (
		<div onClick={handleModalDisplay} className={styles.modal}>
			{displayModal === "search-bar" && (
				<SearchBar
					setCategory={setCategory}
					setCity={setCity}
					city={city}
				/>
			)}
			{displayModal === "user-form" && showLogin && (
				<UserFormModal showLogin={showLogin} />
			)}
			{displayModal === "user-form" && showRegister && (
				<UserFormModal showRegister={showRegister} />
			)}
			{displayModal === "calendar" && (
				<CalendarModal
					setShowLogin={setShowLogin}
					setShowRegister={setShowRegister}
					usersReservations={usersReservations}
					setUsersReservations={setUsersReservations}
					date={date}
					setDate={setDate}
				/>
			)}
			{displayModal === "reservation-confirm" && date && (
				<ReservationConfirm date={date} />
			)}
			{displayModal === "success-alert" && <SuccessAlert />}
		</div>
	);
};

export default Modal;
