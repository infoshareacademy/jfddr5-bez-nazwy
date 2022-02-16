import { useContext, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { businessListContext } from "../../../contexts/BusinessListContext";
import { pathNormalize } from "../../../utils/pathNormalize";
import styles from "./CategoryListBar.module.css";

const CategoryListBar = ({ category, setCategory, setCity }) => {
	const [businessList] = useContext(businessListContext);
	const [activeCategory, setActiveCategory] = useState(category);

	const navigate = useNavigate();
	const categoryList = Array.from(
		new Set(businessList.map((business) => business.category)),
	);

	const handleCategory = (category) => {
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
