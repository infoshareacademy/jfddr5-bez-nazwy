import Service from "./Service";
// import s from "./CategoryList.module.css";

const ServicesList = ({ business, servicesList }) => {
	return (
		<>
			{servicesList?.map((bus) => (
				<div key={bus.businessId}>
					{bus.businessId === business.id
						? bus.services.map((service) => (
								<Service service={service} />
						  ))
						: null}
				</div>
			))}
		</>
	);
};

export default ServicesList;
