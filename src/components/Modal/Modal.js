import { useContext } from "react";
import { modalDisplayContext } from "../../contexts/ModalDisplayContext";
import CalendarModal from "./CalendarModal/CalendarModal";
import { SearchBar } from "./SearchBarModal/SearchBar";
import UserFormModal from "./UserFormModal/UserFormModal";
import styles from "./Modal.module.css";

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

	const handleModalDisplay = () => {
		setDisplayModal("");
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
				/>
			)}
		</div>
	);
};

export default Modal;
