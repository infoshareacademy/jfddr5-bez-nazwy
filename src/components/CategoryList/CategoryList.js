import styles from "./CategoryList.module.css";
import { useNavigate } from "react-router-dom";
import ServicesList from "./ServicesList";
import { useContext } from "react";
import { businessItemContext } from "../../contexts/BusinessItemContext";

const CategoryList = ({ business, servicesList }) => {
	const [activeBusiness, setActiveBusiness] = useContext(businessItemContext);

	const navigate = useNavigate();
	const handleClick = (business) => {
		setActiveBusiness(business);
		navigate(`/product/${business.id}`);
	};

	return (
		<div className={styles.categoryList}>
			<div
				onClick={() => handleClick(business)}
				className={styles.businessData}>
				<h2>
					{business.name}{" "}
					<span>
						{business.city}, {business.contact.street}
					</span>
				</h2>
			</div>
			<div className={styles.panel}>
				<img
					onClick={() => handleClick(business)}
					className={styles.photo}
					src={business.photo}
					width="350"
					height="250"></img>
				<ServicesList
					servicesList={servicesList}
					key={business.id}
					business={business}
				/>
			</div>
			<div className={styles.line}></div>
		</div>
	);
};

export default CategoryList;
