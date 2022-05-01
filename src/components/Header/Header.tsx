import { logoutUser } from "../../utils/db";
import { useCurrentUserContext } from "../../contexts/CurrentUserContext";
import styles from "./Header.module.css";
import { useModalDisplayContext } from "../../contexts/ModalDisplayContext";
import { useNavigate } from "react-router-dom";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
	setShowLogin: Dispatch<SetStateAction<boolean>>;
	setShowRegister: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setShowLogin, setShowRegister }: Props) => {
	const [currentUser] = useCurrentUserContext();
	const [, setDisplayModal] = useModalDisplayContext();
	const navigate = useNavigate();

	const handleLogout = (e: React.FormEvent): void => {
		e.preventDefault();
		logoutUser();
		navigate("/");
	};

	const handleUserForm = (
		callback: Dispatch<SetStateAction<boolean>>,
	): void => {
		setDisplayModal("user-form");
		callback(true);
	};

	return (
		<>
			<nav className={styles.navbar}>
				<h1 onClick={() => navigate("/")} className={styles.logo}>
					petsy
				</h1>
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
