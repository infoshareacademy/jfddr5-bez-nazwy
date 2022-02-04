import { useState } from "react";
import { logoutUser } from "../../utils/db";
import Modal from "./UserFormModal/UserFormModal";

const Header = ({ currentUser }) => {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	const handleLogout = (e) => {
		e.preventDefault();
		logoutUser();
	};

	return (
		<>
			{!currentUser ? (
				<>
					<button onClick={() => setShowLogin(!showLogin)}>
						Logowanie
					</button>
					<button onClick={() => setShowRegister(!showRegister)}>
						Rejestracja
					</button>
				</>
			) : (
				<>
					<p>Cześć, {currentUser.displayName}!</p>
					<button onClick={handleLogout}>Wyloguj się</button>
				</>
			)}
			<Modal
				showLogin={showLogin}
				showRegister={showRegister}
				onClose={() => setShowLogin(false) || setShowRegister(false)}
			/>
		</>
	);
};

export default Header;
