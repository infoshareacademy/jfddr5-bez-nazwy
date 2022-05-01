import Header from "../Header";
import styles from "./FixedNavbar.module.css";
import { SearchBarMock } from "../SearchBarMock/SearchBarMock";
import CategoryListBarDark from "../CategoryListBarDark/CategoryListBarDark";
import { Business } from "../../../utils/db";
import { Dispatch, SetStateAction } from "react";

export interface Props {
	city: string;
	setCity: Dispatch<SetStateAction<string>>;
	setCategory: Dispatch<SetStateAction<string>>;
	setShowLogin: Dispatch<SetStateAction<boolean>>;
	setShowRegister: Dispatch<SetStateAction<boolean>>;
}

const FixedNavbar = ({
	city,
	setCity,
	setCategory,
	setShowLogin,
	setShowRegister,
}: Props) => {
	return (
		<div className={styles.scrollbarWrapper}>
			<div className={styles.scrollbar}>
				<div className={styles.scrollbarHeader}>
					<Header
						setShowLogin={setShowLogin}
						setShowRegister={setShowRegister}
					/>
				</div>
				<div className={styles.scrollbarSearch}>
					<SearchBarMock city={city} />
				</div>
				<CategoryListBarDark
					setCategory={setCategory}
					setCity={setCity}
				/>
			</div>
		</div>
	);
};

export default FixedNavbar;
