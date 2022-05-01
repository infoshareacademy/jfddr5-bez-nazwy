import searchIcon from "./images/search.png";
import pinIcon from "./images/pin.png";
import styles from "./SearchBarMock.module.css";
import { useModalDisplayContext } from "../../../contexts/ModalDisplayContext";

interface Props {
	city: string;
}

export const SearchBarMock = ({ city }: Props) => {
	const [, setDisplayModal] = useModalDisplayContext();
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
