import Header from "../Header";
import styles from "./ScrollingNavbar.module.css";
import { SearchBarMock } from "../SearchBarMock/SearchBarMock";

const ScrollingNavbar = ({
	product,
	setProduct,
	city,
	setCity,
	setCategory,
	showLogin,
	setShowLogin,
	showRegister,
	setShowRegister,
	currentUser,
}) => {
	return (
		<div className={styles.scrollbarWrapper}>
			<div className={styles.scrollbar}>
				<div className={styles.scrollbarHeader}>
					<Header
						setProduct={setProduct}
						product={product}
						setCategory={setCategory}
						setCity={setCity}
						city={city}
						currentUser={currentUser}
						showLogin={showLogin}
						setShowLogin={setShowLogin}
						showRegister={showRegister}
						setShowRegister={setShowRegister}
					/>
				</div>
				<div class={styles.scrollbarSearch}>
					<SearchBarMock
						product={product}
						setProduct={setProduct}
						setCategory={setCategory}
						setCity={setCity}
						city={city}
					/>
				</div>
			</div>
		</div>
	);
};

export default ScrollingNavbar;
