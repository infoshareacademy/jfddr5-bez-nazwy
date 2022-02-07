import { useContext } from "react";
import s from "./CategoryListBar.module.css";
import CategoryList from "../../CategoryList/CategoryList";
import { businessListContext } from "../../../contexts/BusinessListContext";
import { Link, Route, Routes } from "react-router-dom";

const CategoryListBar = ({
	category,
	setCategory,
	setServicesList,
	servicesList,
}) => {
	return (
		<div>
			<div className={s.categoryBar}>
				<Link
					to="groomer"
					className={s.category}
					onClick={() => setCategory("Groomer")}>
					Groomer
				</Link>
				<Link
					to="weterynarz"
					className={s.category}
					onClick={() => setCategory("Weterynarz")}>
					Weterynarz
				</Link>
				<Link
					to="behawiorysta"
					className={s.category}
					onClick={() => setCategory("Behawiorysta")}>
					Behawiorysta
				</Link>
				<Link
					to="hotel"
					className={s.category}
					onClick={() => setCategory("Hotel")}>
					Psi hotel
				</Link>
				<Link
					to="hodowla"
					className={s.category}
					onClick={() => setCategory("Hodowla")}>
					Hodowla
				</Link>
			</div>

			{/* <Routes>
				<Route
					path={category}
					element={
						<div>
							{businessList.map((business) => {
								if (business.category === category) {
									return (
										<CategoryList
											key={business.id}
											business={business}
											setServicesList={setServicesList}
											servicesList={servicesList}
											category={category}
										/>
									);
								}
							})}
						</div>
					}></Route>
			</Routes> */}
		</div>
	);
};

export default CategoryListBar;
