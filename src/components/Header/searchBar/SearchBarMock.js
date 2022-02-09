import searchIcon from "./img/search.png";
import pinIcon from "./img/pin.png";
import styles from "./SearchBar.module.css";
import { SearchBar } from "./SearchBar";
import { useState } from "react";

export const SearchBarMock = ({
	setProduct,
	product,
	setCategory,
	setCity,
	city,
}) => {
	const [displaySearchBar, setDisplaySearchBar] = useState(false);
	const handleSearch = () => {
		setDisplaySearchBar(true);
	};

	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.mock} onClick={handleSearch}>
					<img src={searchIcon}></img>
					<span>Znajdź i zarezerwuj usługę</span>
				</div>
				<div
					className={`${styles.mock} ${styles.mockTwo}`}
					onClick={handleSearch}>
					<img src={pinIcon}></img>
					<span>{city || "Lokalizacja"}</span>
				</div>
			</div>

			{displaySearchBar && (
				<SearchBar
					product={product}
					setProduct={setProduct}
					displaySearchBar={displaySearchBar}
					setCategory={setCategory}
					setCity={setCity}
					onClose={() => setDisplaySearchBar(false)}
					city={city}
				/>
			)}
		</div>
	);
};
