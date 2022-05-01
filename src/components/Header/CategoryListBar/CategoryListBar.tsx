import { Dispatch, SetStateAction, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useBusinessListContext } from "../../../contexts/BusinessListContext";
import { pathNormalize } from "../../../utils/pathNormalize";
import styles from "./CategoryListBar.module.css";

interface Props {
	category?: string;
	setCategory: (category: string) => void;
	setCity: Dispatch<SetStateAction<string>>;
}

const CategoryListBar = ({ category, setCategory, setCity }: Props) => {
	const [businessList] = useBusinessListContext();
	const [activeCategory, setActiveCategory] = useState(category);

	const navigate = useNavigate();
	const categoryList = Array.from(
		new Set(businessList.map((business) => business.category)),
	);

	const handleCategory = (category: string) => {
		setCity("");
		setActiveCategory(category);
		setCategory(category);
		navigate({
			pathname: "/s",
			search: `?${createSearchParams({
				category: pathNormalize(category),
			})}`,
		});
	};

	return (
		<>
			<ul className={styles.categoryBar}>
				{categoryList?.map((category) => {
					return (
						<li
							key={category}
							className={
								category === activeCategory
									? styles.categoryActive
									: styles.category
							}
							onClick={() => handleCategory(category)}>
							{category}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default CategoryListBar;
