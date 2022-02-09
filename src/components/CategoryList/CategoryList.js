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
		<div>
			<div onClick={() => handleClick(business)}>
				<h1>{business.name} </h1>
				<h3>
					{business.city}, {business.contact.street}
				</h3>
			</div>
			<div className={styles.panel}>
				<div>
					<img src={business.photo} width="350"></img>
				</div>
				<div className={styles.panelServices}>
					<ServicesList
						servicesList={servicesList}
						key={business.id}
						business={business}
					/>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default CategoryList;
