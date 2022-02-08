import CategoryListBar from "../components/Header/CategoryListBar/CategoryListBar";
import Header from "../components/Header/Header";
import { SearchBarMock } from "../components/Header/searchBar/SearchBarMock";
import styles from "./HomeView.module.css";
import CallToAction from "../components/Header/CallToAction/CallToAction";
import HeroSlideshow from "../components/Header/HeroSlideshow/HeroSlideshow";

const HomeView = ({
	currentUser,
	setProduct,
	category,
	product,
	setCategory,
	setCity,
	city,
}) => {
	return (
		<>
			<div className={styles.slideshowWrapper}>
				<div className={styles.contentWrapper}>
					<Header
						setProduct={setProduct}
						product={product}
						setCategory={setCategory}
						setCity={setCity}
						city={city}
						currentUser={currentUser}
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
					/>
				</div>
				<HeroSlideshow />
			</div>
		</>
	);
};

export default HomeView;
