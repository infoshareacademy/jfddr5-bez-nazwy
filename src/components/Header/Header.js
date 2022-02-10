import { useContext } from "react";
import { logoutUser } from "../../utils/db";
import { currentUserContext } from "../../contexts/CurrentUserContext";
import styles from "./Header.module.css";
import { modalDisplayContext } from "../../contexts/ModalDisplayContext";
import { useNavigate } from "react-router-dom";

const Header = ({ setShowLogin, setShowRegister }) => {
	const [currentUser] = useContext(currentUserContext);
	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
	const navigate = useNavigate();

	const handleLogout = (e) => {
		e.preventDefault();
		logoutUser();
	};

	const handleUserForm = (callback) => {
		console.log(displayModal);
		setDisplayModal("user-form");
		callback(true);
	};

	return (
		<>
			<nav className={styles.navbar}>
				<h1 className={styles.logo}>petsy</h1>
				{!currentUser ? (
					<div className={styles.userForm}>
						<button
							className={styles.loginButton}
							onClick={() => handleUserForm(setShowLogin)}>
							Logowanie
						</button>
						<button
							className={styles.registerButton}
							onClick={() => handleUserForm(setShowRegister)}>
							Rejestracja
						</button>
					</div>
				) : (
					<div className={styles.userForm}>
						<button
							className={styles.profileButton}
							onClick={() => navigate("/profile")}>
							Profil
						</button>
						<button
							className={styles.logoutButton}
							onClick={handleLogout}>
							Wyloguj się
						</button>
					</div>
				)}
			</nav>
		</>
	);
};

export default Header;
