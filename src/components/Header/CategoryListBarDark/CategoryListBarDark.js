import CategoryListBar from "../CategoryListBar/CategoryListBar";
import styles from "./CategoryListBarDark.module.css";

const CategoryListBarDark = ({ setCategory }) => {
	return (
		<div className={styles.categoryListBarDark}>
			<CategoryListBar setCategory={setCategory} />
		</div>
	);
};

export default CategoryListBarDark;
