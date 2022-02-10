import { useContext } from "react";
import ServicesList from "../components/CategoryList/ServicesList";
import { businessItemContext } from "../contexts/BusinessItemContext";
import s from "./ProductView.module.css";
import RatingList from "../components/CategoryList/RatingList";

const ProductView = ({ servicesList, ratingList }) => {
	const [activeBusiness] = useContext(businessItemContext);
	console.log(activeBusiness);
	return (
		<div className={s.content}>
			<div className={s.leftSide}>
				<img src={activeBusiness.photo} width="100%" />
				<h1>{activeBusiness.name}</h1>
				<h3>
					{activeBusiness.city}, {activeBusiness.contact.street}
				</h3>

				<ServicesList
					servicesList={servicesList}
					business={activeBusiness}
				/>
			</div>
			<div className={s.rightSide}>
				<div>
					<h4>O nas:</h4> {activeBusiness.info}
					{/* dodać product.info do bazy */}
				</div>
				<div>
					<h4>Kontakt i godziny otwarcia: </h4>
					{/* dodać godziny otwarcia */}
					<p>Poniedziałek: 9:00 - 18:00</p>
					<p>Wtorek: 9:00 - 18:00</p>
					<p>Środa: 9:00 - 18:00</p>
					<p>Czwartek: 9:00 - 18:00</p>
					<p>Piątek: 9:00 - 18:00</p>
					<p>Sobota: 9:00 - 18:00</p>
					<p>Niedziela: 9:00 - 18:00</p>
					<p>Nr tel: {activeBusiness.contact.phone}</p>
				</div>

				<div>
					<p>E-mail: {activeBusiness.contact.email}</p>
				</div>
				<div>
					<RatingList
						ratingList={ratingList}
						key={activeBusiness.id}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductView;
