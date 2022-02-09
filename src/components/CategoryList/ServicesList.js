import Service from "./Service";

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
