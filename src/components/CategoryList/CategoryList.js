import { useNavigate } from "react-router-dom";
import s from "./CategoryList.module.css";
import ServicesList from "./ServicesList";

const CategoryList = ({
	business,
	setServicesList,
	servicesList,
	category,
	setProduct,
}) => {
	const navigate = useNavigate();
	const handleClick = (business) => {
		setProduct(business);
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

			<div className={s.panel}>
				<div>
					<img src={business.photo} width="350"></img>
				</div>
				<div className={s.panelServices}>
					<ServicesList
						setServicesList={setServicesList}
						servicesList={servicesList}
						business={business}
						key={business.id}
					/>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default CategoryList;
