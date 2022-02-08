import Service from "./Service";
// import s from "./CategoryList.module.css";

const ServicesList = ({ business, servicesList, setShowLogin, showLogin }) => {
	return (
		<>
			{servicesList?.map((bus) =>
				bus.businessId === business.id ? (
					<div>
						{bus.services.map((service) => (
							<Service
								key={service.id}
								service={service}
								business={business}
								showLogin={showLogin}
								setShowLogin={setShowLogin}
							/>
						))}
					</div>
				) : null,
			)}
		</>
	);
};

export default ServicesList;
