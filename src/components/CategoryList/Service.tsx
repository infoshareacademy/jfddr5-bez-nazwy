import { useContext } from "react";
import styles from "./CategoryList.module.css";
import { modalDisplayContext } from "../../contexts/ModalDisplayContext";
import { serviceItemContext } from "../../contexts/ServiceItemContext";
import { businessItemContext } from "../../contexts/BusinessItemContext";

const Service = ({ service, business }) => {
	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
	const [activeService, setActiveService] = useContext(serviceItemContext);
	const [activeBusiness, setActiveBusiness] = useContext(businessItemContext);

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
