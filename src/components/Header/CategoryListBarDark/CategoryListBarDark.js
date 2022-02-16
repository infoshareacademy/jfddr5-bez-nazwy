import CategoryListBar from "../CategoryListBar/CategoryListBar";
import styles from "./CategoryListBarDark.module.css";

const CategoryListBarDark = ({ setCategory, setCity }) => {
	return (
		<div className={styles.categoryListBarDark}>
			<CategoryListBar setCategory={setCategory} setCity={setCity} />
		</div>
	);
};

export default CategoryListBarDark;
