import styles from "./CategoryListBar.module.css";
import { Link } from "react-router-dom";

const CategoryListBar = ({ setCategory }) => {
	return (
		<>
			<div className={styles.categoryBar}>
				<Link
					to="groomer"
					className={styles.category}
					onClick={() => setCategory("Groomer")}>
					Groomer
				</Link>
				<Link
					to="weterynarz"
					className={styles.category}
					onClick={() => setCategory("Weterynarz")}>
					Weterynarz
				</Link>
				<Link
					to="behawiorysta"
					className={styles.category}
					onClick={() => setCategory("Behawiorysta")}>
					Behawiorysta
				</Link>
				<Link
					to="hotel"
					className={styles.category}
					onClick={() => setCategory("Hotel")}>
					Psi hotel
				</Link>
				<Link
					to="hodowla"
					className={styles.category}
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
		</>
	);
};

export default CategoryListBar;
