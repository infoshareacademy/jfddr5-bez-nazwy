import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
	modalDisplayContext,
	useModalDisplayContext,
} from "../../contexts/ModalDisplayContext";
import CalendarModal from "./CalendarModal/CalendarModal";
import { SearchBar } from "./SearchBarModal/SearchBar";
import UserFormModal from "./UserFormModal/UserFormModal";
import styles from "./Modal.module.css";
import ReservationConfirm from "./ReservationConfirm/ReservationConfirm";
import SuccessAlert from "./SuccessAlert/SuccessAlert";
import { UsersReservationsPerDay } from "../../utils/db";

interface Props {
	showLogin: boolean;
	showRegister: boolean;
	setShowLogin: Dispatch<SetStateAction<boolean>>;
	setShowRegister: Dispatch<SetStateAction<boolean>>;
	setCategory: Dispatch<SetStateAction<string>>;
	setCity: Dispatch<SetStateAction<string>>;
	city: string;
	usersReservations: UsersReservationsPerDay[];
	setUsersReservations: Dispatch<SetStateAction<UsersReservationsPerDay[]>>;
}

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
}: Props) => {
	const [displayModal, setDisplayModal] = useModalDisplayContext();
	const [date, setDate] = useState<Date | null>(null);

	const handleModalDisplay = () => {
		setDisplayModal("");
		setDate(null);
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
				<UserFormModal showLogin={showLogin} showRegister={false} />
			)}
			{displayModal === "user-form" && showRegister && (
				<UserFormModal showRegister={showRegister} showLogin={false} />
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
