import searchIcon from "./images/search.png";
import pinIcon from "./images/pin.png";
import styles from "./SearchBarMock.module.css";
import { useContext } from "react";
import { modalDisplayContext } from "../../../contexts/ModalDisplayContext";

export const SearchBarMock = ({ city }) => {
	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
	const handleSearch = () => {
		setDisplayModal("search-bar");
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
		</div>
	);
};
