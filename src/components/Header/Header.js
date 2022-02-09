import { useContext } from "react";
import { logoutUser } from "../../utils/db";
import { currentUserContext } from "../../contexts/CurrentUserContext";
import styles from "./Header.module.css";

const Header = ({
	showLogin,
	setShowLogin,
	showRegister,
	setShowRegister,
	custom,
}) => {
	const [currentUser] = useContext(currentUserContext);

	const handleLogout = (e) => {
		e.preventDefault();
		logoutUser();
	};

	return (
		<>
			<nav className={styles.navbar}>
				<h1 className={styles.logo}>petsy</h1>
				{!currentUser ? (
					<div className={styles.userForm}>
						<button
							className={styles.loginButton}
							onClick={() => setShowLogin(!showLogin)}>
							Logowanie
						</button>
						<button
							className={styles.registerButton}
							onClick={() => setShowRegister(!showRegister)}>
							Rejestracja
						</button>
					</div>
				) : (
					<div>
						<p>Cześć, {currentUser.email}!</p>
						<button onClick={handleLogout}>Wyloguj się</button>
					</div>
				)}
			</nav>
		</>
	);
};

export default Header;
