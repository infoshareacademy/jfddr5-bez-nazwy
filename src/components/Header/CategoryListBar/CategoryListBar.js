import styles from "./CategoryListBar.module.css";
import { Link } from "react-router-dom";

const CategoryListBar = ({ setCategory }) => {
	return (
		<>
			<ul className={styles.categoryBar}>
				<Link
					to="groomer"
					className={styles.category}
					onClick={() => setCategory("Groomer")}>
					<li>Groomer</li>
				</Link>
				<Link
					to="weterynarz"
					className={styles.category}
					onClick={() => setCategory("Weterynarz")}>
					<li>Weterynarz</li>
				</Link>
				<Link
					to="behawiorysta"
					className={styles.category}
					onClick={() => setCategory("Behawiorysta")}>
					<li>Behawiorysta</li>
				</Link>
				<Link
					to="hotel"
					className={styles.category}
					onClick={() => setCategory("Hotel")}>
					<li>Psi hotel</li>
				</Link>
				<Link
					to="hodowla"
					className={styles.category}
					onClick={() => setCategory("Hodowla")}>
					<li>Hodowla</li>
				</Link>
			</ul>

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
		</>
	);
};

export default CategoryListBar;
