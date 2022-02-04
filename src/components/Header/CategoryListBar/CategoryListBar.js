import { useContext, useState } from "react";
import s from "./CategoryListBar.module.css";
import CategoryList from "../../CategoryList/CategoryList";
import { businessListContext } from "../../../contexts/BusinessListContext";
import { Link, Route, Routes } from "react-router-dom";
const CategoryListBar = ({ category, setCategory }) => {
	const businessList = useContext(businessListContext);

	return (
		<div>
			<div className={s.categoryBar}>
				<Link
					to="Groomer"
					className={s.category}
					onClick={() => setCategory("Groomer")}>
					Groomer
				</Link>
				<Link
					to="Weterynarz"
					className={s.category}
					onClick={() => setCategory("Weterynarz")}>
					Weterynarz
				</Link>
				<Link
					to="Behawiorysta"
					className={s.category}
					onClick={() => setCategory("Behawiorysta")}>
					Behawiorysta
				</Link>
				<Link
					to="Hotel"
					className={s.category}
					onClick={() => setCategory("Hotel")}>
					Psi hotel
				</Link>
				<Link
					to="Hodowla"
					className={s.category}
					onClick={() => setCategory("Hodowla")}>
					Hodowla
				</Link>
			</div>
			<Routes>
				<Route
					path={category}
					element={businessList.map((business) => {
						if (business.category === category) {
							return (
								<CategoryList
									key={business.id}
									business={business}
								/>
							);
						}
					})}></Route>
			</Routes>
		</div>
	);
};

export default CategoryListBar;
