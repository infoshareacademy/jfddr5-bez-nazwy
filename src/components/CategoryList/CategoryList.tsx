import styles from "./CategoryList.module.css";
import { useNavigate } from "react-router-dom";
import ServicesList from "./ServicesList";
import { useBusinessItemContext } from "../../contexts/BusinessItemContext";
import { Business, BusinessService } from "../../utils/db";

interface Props {
	business: Business;
	servicesList: BusinessService[];
}

const CategoryList = ({ business, servicesList }: Props) => {
	const [, setActiveBusiness] = useBusinessItemContext();

	const navigate = useNavigate();
	const handleClick = (business: Business) => {
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
					height="250"
					alt={"thumbnail"}></img>
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
