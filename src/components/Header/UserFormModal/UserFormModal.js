import React, { useState } from "react";
import ReactDOM from "react-dom";
import { loginUser, registerUser } from "../../../utils/db";
import styles from "./UserFormModal.module.css";

const Modal = ({ showLogin, showRegister, onClose }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [city, setCity] = useState("");
	const [registerErrorMessage, setRegisterErrorMessage] = useState(null);
	const [loginErrorMessage, setLoginErrorMessage] = useState(null);

	const handleRegister = async (e) => {
		e.preventDefault();
		const returnedMessage = await registerUser(
			username,
			email,
			password,
			city,
		);
		setRegisterErrorMessage(returnedMessage);
		if (returnedMessage === undefined) {
			onClose();
			setUsername("");
			setEmail("");
			setPassword("");
			setCity("");
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const returnedMessage = await loginUser(email, password);
		setLoginErrorMessage(returnedMessage);
		if (returnedMessage === undefined) {
			onClose();
			setEmail("");
			setPassword("");
		}
	};

	if (!showLogin && !showRegister) {
		return null;
	}
	return ReactDOM.createPortal(
		<div className={styles.modal} onClick={onClose}>
			<div
				className={styles.modalContent}
				onClick={(e) => e.stopPropagation()}>
				{showRegister && (
					<form
						className={styles.modalForm}
						onSubmit={handleRegister}>
						<input
							type="email"
							placeholder="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<input
							type="password"
							placeholder="Hasło"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<input
							type="text"
							placeholder="Nazwa użytkownika"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
						<input
							type="text"
							placeholder="Miasto"
							value={city}
							onChange={(e) => setCity(e.target.value)}
							required
						/>
						{registerErrorMessage !== null && (
							<p className={styles.errorMessage}>
								{registerErrorMessage}
							</p>
						)}
						<button type="submit">Zarejestruj się</button>
					</form>
				)}
				{showLogin && (
					<form className={styles.modalForm} onSubmit={handleLogin}>
						<input
							type="email"
							placeholder="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<input
							type="password"
							placeholder="Hasło"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						{loginErrorMessage !== null && (
							<p className={styles.errorMessage}>
								{loginErrorMessage}
							</p>
						)}
						<button type="submit">Zaloguj się</button>
					</form>
				)}
			</div>
		</div>,
		document.getElementById("root"),
	);
};

export default Modal;
