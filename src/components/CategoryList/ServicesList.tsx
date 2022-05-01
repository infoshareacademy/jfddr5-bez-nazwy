import Service from "./Service";
import styles from "./CategoryList.module.css";
import { Business, BusinessService } from "../../utils/db";

interface Props {
	servicesList: BusinessService[];
	business: Business;
}

const ServicesList = ({ servicesList, business }: Props) => {
	return (
		<>
			{servicesList?.map((bus) =>
				bus.businessId === business.id ? (
					<div key={business.id} className={styles.panelServices}>
						{bus.services.map((service) => {
							return (
								<Service
									key={service.id}
									service={service}
									business={business}
								/>
							);
						})}
					</div>
				) : null,
			)}
		</>
	);
};

export default ServicesList;
