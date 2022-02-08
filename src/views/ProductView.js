import ServicesList from "../components/CategoryList/ServicesList";
import s from "./ProductView.module.css";
const ProductView = ({ product, setServicesList, servicesList, business }) => {
	return (
		<div className={s.content}>
			<div className={s.leftSide}>
				<img src={product.photo} width="100%" />
				<h3>
					ProductView: {product.name}, {product.city}
				</h3>
				<ServicesList
					servicesList={servicesList}
					setServicesList={setServicesList}
					business={product}
					key={product.id}
				/>
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
					<p>Nr tel: {product.contact.phone}</p>
				</div>
				<div>
					<p>E-mail: {product.contact.email}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductView;
