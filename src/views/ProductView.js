import { useContext } from "react";
import ServicesList from "../components/CategoryList/ServicesList";
import { businessItemContext } from "../contexts/BusinessItemContext";
import s from "./ProductView.module.css";

const ProductView = ({ servicesList }) => {
	const [activeBusiness] = useContext(businessItemContext);

	return (
		<div className={s.content}>
			<div className={s.leftSide}>
				<img src={activeBusiness.photo} width="100%" />
				<h1>{activeBusiness.name}</h1>
				<h3>
					{activeBusiness.city}, {activeBusiness.contact.street}
				</h3>

				<ServicesList servicesList={servicesList} />
			</div>
			<div className={s.rightSide}>
				<div>
					<h4>O nas:</h4> {/* dodać product.info do bazy */}
				</div>
				<div>
					<h4>Kontakt i godziny otwarcia: </h4>
					{/* dodać godziny otwarcia */}
					<p>Poniedziałek: </p>
					<p>Wtorek: </p>
					<p>Środa: </p>
					<p>Czwartek: </p>
					<p>Piątek: </p>
					<p>Sobota: </p>
					<p>Niedziela: </p>
					<p>Nr tel: {activeBusiness.contact.phone}</p>
				</div>
				<div>
					<p>E-mail: {activeBusiness.contact.email}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductView;
