import Service from "./Service";
// import s from "./CategoryList.module.css";

const ServicesList = ({ business, servicesList }) => {
	return (
		<>
			{servicesList?.map((bus) => (
				<div key={bus.businessId}>
					{bus.businessId === business.id
						? bus.services.map((service) => (
								<Service
									key={service.id}
									service={service}
									business={business}
								/>
						  ))
						: null}
				</div>
			))}
		</>
	);
};

export default ServicesList;
