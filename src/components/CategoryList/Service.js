import { useContext } from "react";
import s from "./CategoryList.module.css";
import { modalDisplayContext } from "../../contexts/ModalDisplayContext";
import { serviceItemContext } from "../../contexts/ServiceItemContext";

const Service = ({ service }) => {
	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
	const [activeService, setActiveService] = useContext(serviceItemContext);

	const handleServiceButton = () => {
		setActiveService(service);
		setDisplayModal("calendar");
	};
	return (
		<>
			<div key={service.id} className={s.servicesList}>
				<div className={s.servicesListName}>{service.name}</div>
				<div className={s.servicesListPrice}>{service.price}zł</div>
				<div className={s.servicesListPrice}>{service.slot}</div>
				<button
					className={s.servicesButton}
					onClick={handleServiceButton}>
					Zarezerwuj
				</button>
			</div>
		</>
	);
};

export default Service;
