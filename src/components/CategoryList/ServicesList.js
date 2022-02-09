import Service from "./Service";

const ServicesList = ({
	business,
	servicesList,
	setShowLogin,
	showLogin,
	setShowRegister,
}) => {
	return (
		<>
			{servicesList?.map((bus) =>
				bus.businessId === business.id ? (
					<div key={business.id}>
						{bus.services.map((service) => (
							<Service
								key={service.id}
								service={service}
								business={business}
								showLogin={showLogin}
								setShowLogin={setShowLogin}
								setShowRegister={setShowRegister}
							/>
						))}
					</div>
				) : null,
			)}
		</>
	);
};

export default ServicesList;
