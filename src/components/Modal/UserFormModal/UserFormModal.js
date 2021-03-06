import React, { useContext, useState } from "react";
import { modalDisplayContext } from "../../../contexts/ModalDisplayContext";
import { loginUser, registerUser } from "../../../utils/db";
import styles from "./UserFormModal.module.css";

const UserFormModal = ({ showLogin, showRegister }) => {
	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
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
			setDisplayModal("");
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
			setDisplayModal("");
			setEmail("");
			setPassword("");
		}
	};

	return (
		<>
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
		</>
	);
};

export default UserFormModal;
