import { useContext, useEffect, useState } from "react";
import s from "./CategoryListBar.module.css";
import CategoryList from "../../CategoryList/CategoryList";
import { businessListContext } from "../../../contexts/BusinessListContext";
import { Link, Route, Routes } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../utils/db";

const CategoryListBar = ({ category, setCategory }) => {
	const businessList = useContext(businessListContext);
	const [servicesList, setServicesList] = useState([]);

	const newArray = [];

	const getServicesList = async (id) => {
		const servicesSnapshot = await getDocs(
			collection(db, "business", id, "services"),
		);
		const servicesList = servicesSnapshot.docs.map((doc) => ({
			id: doc.id,
			name: doc.data().name,
			price: doc.data().price,
			slot: doc.data().slot,
		}));
		setServicesList((prevValue) => [...prevValue, { id, servicesList }]);
	};
	useEffect(() => {
		newArray.map((id) => getServicesList(id));
		return setServicesList([]);
	}, [category]);

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
					element={
						<div>
							{businessList.map((business) => {
								if (business.category === category) {
									newArray.push(business.id);
									return (
										<CategoryList
											key={business.id}
											business={business}
											servicesList={servicesList}
										/>
									);
								}
							})}
						</div>
					}></Route>
			</Routes>
		</div>
	);
};

export default CategoryListBar;
