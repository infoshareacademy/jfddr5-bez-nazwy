import CategoryListBar from "../components/Header/CategoryListBar/CategoryListBar";
import Header from "../components/Header/Header";
import { SearchBarMock } from "../components/Header/SearchBarMock/SearchBarMock";
import styles from "./HomeView.module.css";
import CallToAction from "../components/Header/CallToAction/CallToAction";
import HeroSlideshow from "../components/Header/HeroSlideshow/HeroSlideshow";

const HomeView = ({
	category,
	setCategory,
	city,
	setShowLogin,
	setShowRegister,
}) => {
	return (
		<>
			<div className={styles.slideshowWrapper}>
				<div className={styles.contentWrapper}>
					<Header
						setShowLogin={setShowLogin}
						setShowRegister={setShowRegister}
					/>
					<CallToAction />
					<SearchBarMock city={city} />
					<CategoryListBar
						category={category}
						setCategory={setCategory}
					/>
				</div>
				<HeroSlideshow />
			</div>
		</>
	);
};

export default HomeView;
