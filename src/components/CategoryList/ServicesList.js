import { useContext } from "react";
import { businessItemContext } from "../../contexts/BusinessItemContext";
import Service from "./Service";
// import s from "./CategoryList.module.css";

const ServicesList = ({ servicesList }) => {
	const [activeBusiness] = useContext(businessItemContext);
	return (
		<>
			{servicesList?.map((bus) =>
				bus.businessId === activeBusiness.id ? (
					<div key={activeBusiness.id}>
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
