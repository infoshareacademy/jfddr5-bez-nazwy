import Service from "./Service";
import styles from "./CategoryList.module.css";

const ServicesList = ({ servicesList, business }) => {
	return (
		<>
			{servicesList?.map((bus) =>
				bus.businessId === business.id ? (
					<div key={business.id} className={styles.panelServices}>
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
