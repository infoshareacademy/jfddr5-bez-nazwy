import React, { useState } from "react";
import { loginUser, logoutUser, registerUser } from "../utils/db";

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
	};

	const handleLogin = (e) => {
		e.preventDefault();
		loginUser(email, password);
	};

	const handleLogout = (e) => {
		e.preventDefault();
		logoutUser();
	};

	if (!props.show) {
		return null;
	}
	return (
		<div>
			<form onSubmit={handleRegister}>
				<input
					type="text"
					placeholder="Nazwa użytkownika"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
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
					placeholder="Miasto"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<button type="submit">Zarejestruj się</button>
			</form>
		</div>
	);
};

export default Modal;
