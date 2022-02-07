import s from "./CategoryList.module.css";
import ServicesList from "./ServicesList";

const CategoryList = ({
	business,
	setServicesList,
	servicesList,
	category,
}) => {
	return (
		<div>
			<div>
				<h1>{business.name} </h1>
				<h3>{business.city}</h3>
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
					/>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default CategoryList;
