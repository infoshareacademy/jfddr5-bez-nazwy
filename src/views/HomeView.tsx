import CategoryListBar from "../components/Header/CategoryListBar/CategoryListBar";
import Header from "../components/Header/Header";
import { SearchBarMock } from "../components/Header/SearchBarMock/SearchBarMock";
import styles from "./HomeView.module.css";
import CallToAction from "../components/Header/CallToAction/CallToAction";
import HeroSlideshow from "../components/Header/HeroSlideshow/HeroSlideshow";
import ScrollingNavbar from "../components/Header/ScrollingNavbar/ScrollingNavbar";
import RecommendedSection from "../components/RecommendedSection/RecommendedSection";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";
import { Dispatch, SetStateAction } from "react";

interface Props {
	category: string;
	city: string;
	setCategory: Dispatch<SetStateAction<string>>;
	setCity: Dispatch<SetStateAction<string>>;
	setShowLogin: Dispatch<SetStateAction<boolean>>;
	setShowRegister: Dispatch<SetStateAction<boolean>>;
}

const HomeView = ({
	category,
	setCategory,
	city,
	setCity,
	setShowLogin,
	setShowRegister,
}: Props) => {
	return (
		<>
			<div className={styles.wrapper}>
				<ScrollingNavbar
					setCity={setCity}
					setCategory={setCategory}
					setShowLogin={setShowLogin}
					city={city}
					setShowRegister={setShowRegister}
				/>
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
							setCity={setCity}
						/>
					</div>
					<HeroSlideshow />
				</div>
				<RecommendedSection />
			</div>
			<div>
				<InfoSection />
			</div>
			<Footer />
		</>
	);
};

export default HomeView;
