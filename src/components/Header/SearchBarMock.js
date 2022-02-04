import searchIcon from "./img/search.png";
import pinIcon from "./img/pin.png";
import styles from "./SearchBarMock.module.css";
import { SearchBar } from "./SerachBar";

export const SearchBarMock = ({
	searchType,
	handleSearchType,
	setProduct,
	product,
}) => {
	const handleSearch = (value) => {
		handleSearchType(value);
		console.log(searchType);
	};

	return (
		<div>
			<div className={styles.wrapper}>
				<div
					className={styles.mock}
					onClick={() => handleSearch("service")}>
					<img src={searchIcon}></img>
					<span>Znajdź i zarezerwuj usługę</span>
				</div>
				<div
					className={styles.mock}
					onClick={() => handleSearch("localization")}>
					<img src={pinIcon}></img>
					<span>Lokalizacja</span>
				</div>
			</div>
			<SearchBar
				product={product}
				setProduct={setProduct}
				searchType={searchType}
			/>
		</div>
	);
};
