import CategoryListBar from "../components/Header/CategoryListBar/CategoryListBar";
import Header from "../components/Header/Header";
import HeroSlideshow from "../components/Header/HeroSlideshow/HeroSlideshow";
import { SearchBarMock } from "../components/Header/searchBar/SearchBarMock";
import styles from "./HomeView.module.css";

const HomeView = ({
	setProduct,
	category,
	product,
	setCategory,
	setCity,
	city,
}) => {
	return (
		<>
			<HeroSlideshow />
			<div className={styles.container}>
				<Header
					setProduct={setProduct}
					product={product}
					setCategory={setCategory}
					setCity={setCity}
					city={city}
				/>
				<div className={styles.callToAction}>
					<h2>Petsy, Petsy, Petsy</h2>
					<p>Zapewnij swojemu Pupilowi najlepszą opiekę!</p>
				</div>
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
		</>
	);
};

export default HomeView;
