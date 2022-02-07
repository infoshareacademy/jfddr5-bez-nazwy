import { SearchBarMock } from "./searchBar/SearchBarMock";
import { useState } from "react";
import { logoutUser } from "../../utils/db";
import Modal from "./UserFormModal/UserFormModal";

const Header = ({
	setProduct,
	product,
	currentUser,
	setCategory,
	setCity,
	city,
}) => {
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
					<p>Cześć, {currentUser.email}!</p>
					<button onClick={handleLogout}>Wyloguj się</button>
				</>
			)}
			<Modal
				showLogin={showLogin}
				showRegister={showRegister}
				onClose={() => setShowLogin(false) || setShowRegister(false)}
			/>

			<SearchBarMock
				product={product}
				setProduct={setProduct}
				setCategory={setCategory}
				setCity={setCity}
				city={city}
			/>
		</>
	);
};

export default Header;
