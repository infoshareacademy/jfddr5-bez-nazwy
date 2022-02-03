import React, { useState } from "react";
import ReactDOM from "react-dom";
import { loginUser, registerUser } from "../../../utils/db";
import styles from "./UserFormModal.module.css";

const Modal = (props) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [city, setCity] = useState("");

	const handleRegister = (e) => {
		e.preventDefault();
		registerUser(username, email, password, city);
		setUsername("");
		setEmail("");
		setPassword("");
		setCity("");
		props.onClose();
	};

	const handleLogin = (e) => {
		e.preventDefault();
		loginUser(email, password);
		setEmail("");
		setPassword("");
		props.onClose();
	};

	if (!props.showLogin && !props.showRegister) {
		return null;
	}
	return ReactDOM.createPortal(
		<div className={styles.modal} onClick={props.onClose}>
			<div
				className={styles.modalContent}
				onClick={(e) => e.stopPropagation()}
			>
				{props.showRegister && (
					<form
						className={styles.modalForm}
						onSubmit={handleRegister}
					>
						<input
							type="email"
							placeholder="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Hasło"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Nazwa użytkownika"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Miasto"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						<button type="submit">Zarejestruj się</button>
					</form>
				)}
				{props.showLogin && (
					<form className={styles.modalForm} onSubmit={handleLogin}>
						<input
							type="email"
							placeholder="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Hasło"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="submit">Zaloguj się</button>
					</form>
				)}
			</div>
		</div>,
		document.getElementById("root"),
	);
};

export default Modal;
