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

const HomeView = ({
	currentUser,
	product,
	setProduct,
	category,
	setCategory,
	city,
	setCity,
	showLogin,
	setShowLogin,
	showRegister,
	setShowRegister,
}) => {
	return (
		<>
			<div className={styles.wrapper}>
				<ScrollingNavbar
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
				<div className={styles.slideshowWrapper}>
					<div className={styles.contentWrapper}>
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
						<CallToAction />
						<SearchBarMock
							product={product}
							setProduct={setProduct}
							setCategory={setCategory}
							setCity={setCity}
							city={city}
						/>
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
