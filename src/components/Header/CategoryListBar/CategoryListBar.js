import { useContext } from "react";
import s from "./CategoryListBar.module.css";
import { businessListContext } from "../../../contexts/BusinessListContext";
import { Link } from "react-router-dom";
const CategoryListBar = ({ category, setCategory }) => {
	const businessList = useContext(businessListContext);

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
		</div>
	);
};

export default CategoryListBar;
