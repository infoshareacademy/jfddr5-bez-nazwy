import styles from "./CategoryList.module.css";
import { useBusinessItemContext } from "../../contexts/BusinessItemContext";
import { useModalDisplayContext } from "../../contexts/ModalDisplayContext";
import { useServiceItemContext } from "../../contexts/ServiceItemContext";
import { Business, Service as ServiceType } from "../../utils/db";

interface Props {
	business: Business;
	service: ServiceType;
}

const Service = ({ service, business }: Props) => {
	const [, setDisplayModal] = useModalDisplayContext();
	const [, setActiveService] = useServiceItemContext();
	const [, setActiveBusiness] = useBusinessItemContext();

	const handleServiceButton = () => {
		setActiveBusiness(business);
		setActiveService(service);
		setDisplayModal("calendar");
	};
	return (
		<>
			<div key={service.id} className={styles.servicesList}>
				<div className={styles.servicesListName}>{service.name}</div>
				<div className={styles.servicesListPrice}>
					{service.price}zł
				</div>
				<div>
					<button
						className={styles.servicesButton}
						onClick={handleServiceButton}>
						Zarezerwuj
					</button>
				</div>
			</div>
		</>
	);
};

export default Service;
