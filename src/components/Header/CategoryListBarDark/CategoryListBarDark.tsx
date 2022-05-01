import { Dispatch, SetStateAction } from "react";
import CategoryListBar from "../CategoryListBar/CategoryListBar";
import styles from "./CategoryListBarDark.module.css";

interface Props {
	setCategory: Dispatch<SetStateAction<string>>;
	setCity: Dispatch<SetStateAction<string>>;
}

const CategoryListBarDark = ({ setCategory, setCity }: Props) => {
	return (
		<div className={styles.categoryListBarDark}>
			<CategoryListBar setCategory={setCategory} setCity={setCity} />
		</div>
	);
};

export default CategoryListBarDark;
