import { useContext } from "react";
import { businessItemContext } from "../../contexts/BusinessItemContext";
import Service from "./Service";

const ServicesList = ({ servicesList, business }) => {
	return (
		<>
			{servicesList?.map((bus) =>
				bus.businessId === business.id ? (
					<div key={business.id}>
						{bus.services.map((service) => {
							return (
								<Service key={service.id} service={service} />
							);
						})}
					</div>
				) : null,
			)}
		</>
	);
};

export default ServicesList;
