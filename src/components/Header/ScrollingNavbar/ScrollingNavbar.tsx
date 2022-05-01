import Header from "../Header";
import styles from "./ScrollingNavbar.module.css";
import { SearchBarMock } from "../SearchBarMock/SearchBarMock";
import { Props } from "../FixedNavbar/FixedNavbar";

const ScrollingNavbar = ({ city, setShowLogin, setShowRegister }: Props) => {
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
			</div>
		</div>
	);
};

export default ScrollingNavbar;
