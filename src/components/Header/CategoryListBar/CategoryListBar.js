import { useContext } from "react";
import s from "./CategoryListBar.module.css";
import FilteredBusinessList from "../../CategoryList/FilteredBusinessList";
import { businessListContext } from "../../../contexts/BusinessListContext";
import { Link } from "react-router-dom";
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
		</div>
	);
};

export default CategoryListBar;
