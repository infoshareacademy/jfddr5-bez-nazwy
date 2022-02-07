import { useState } from "react";
import { logoutUser } from "../../utils/db";
import Modal from "./UserFormModal/UserFormModal";
import styles from "./Header.module.css";

const Header = ({ currentUser }) => {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

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
				<Modal
					showLogin={showLogin}
					showRegister={showRegister}
					onClose={() =>
						setShowLogin(false) || setShowRegister(false)
					}
				/>
			</nav>
		</>
	);
};

export default Header;
