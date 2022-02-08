import { SearchBarMock } from "./searchBar/SearchBarMock";
import { useState, useContext } from "react";
import { logoutUser } from "../../utils/db";
import Modal from "./UserFormModal/UserFormModal";
import CategoryListBar from "./CategoryListBar/CategoryListBar";
import { currentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
	setProduct,
	product,
	// currentUser,
	category,
	setCategory,
	setCity,
	city,
}) => {
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);
	const [currentUser] = useContext(currentUserContext);
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
			<CategoryListBar category={category} setCategory={setCategory} />
		</>
	);
};

export default Header;
