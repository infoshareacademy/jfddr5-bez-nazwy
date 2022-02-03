import { useContext, useState } from "react";
import s from "./CategoryListBar.module.css";
import CategoryList from "../../CategoryList/CategoryList";
import { businessListContext } from "../../../contexts/BusinessListContext";

const CategoryListBar = () => {
	const businessList = useContext(businessListContext);
	const [category, setCategory] = useState("");
	return (
		<div>
			<div className={s.categoryBar}>
				<div
					className={s.category}
					onClick={() => setCategory("Groomer")}>
					Groomer
				</div>
				<div
					className={s.category}
					onClick={() => setCategory("Weterynarz")}>
					Weterynarz
				</div>
				<div
					className={s.category}
					onClick={() => setCategory("Behawiorysta")}>
					Behawiorysta
				</div>
				<div
					className={s.category}
					onClick={() => setCategory("Hotel")}>
					Psi hotel
				</div>
				<div
					className={s.category}
					onClick={() => setCategory("Hodowla")}>
					Hodowla
				</div>
			</div>

			{businessList.map((bus) => {
				if (bus.category === category) {
					return (
						<CategoryList
							key={bus.id}
							id={bus.id}
							name={bus.name}
							contact={bus.contact}
						/>
					);
				}
			})}
		</div>
	);
};

export default CategoryListBar;
