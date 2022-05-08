import ServicesList from "../components/CategoryList/ServicesList";
import { useBusinessItemContext } from "../contexts/BusinessItemContext";
import styles from "./ProductView.module.css";
import RatingList from "../components/CategoryList/RatingList";
import FixedNavbar from "../components/Header/FixedNavbar/FixedNavbar";
import Footer from "../components/Footer/Footer";
import { BusinessRating, BusinessService } from "../utils/db";
import { Dispatch, SetStateAction } from "react";

interface Props {
	servicesList: BusinessService[];
	ratingList: BusinessRating[];
	city: string;
	setCategory: Dispatch<SetStateAction<string>>;
	setCity: Dispatch<SetStateAction<string>>;
	setShowLogin: Dispatch<SetStateAction<boolean>>;
	setShowRegister: Dispatch<SetStateAction<boolean>>;
}

const ProductView = ({
	servicesList,
	ratingList,
	setCategory,
	city,
	setCity,
	setShowLogin,
	setShowRegister,
}: Props) => {
	const [activeBusiness] = useBusinessItemContext();

	return (
		<div>
			<FixedNavbar
				setCategory={setCategory}
				setCity={setCity}
				city={city}
				setShowLogin={setShowLogin}
				setShowRegister={setShowRegister}
			/>
			<div className={styles.content}>
				<div className={styles.section}>
					<div className={styles.photo}>
						<img
							src={activeBusiness.photo}
							width="600px"
							height="500px"
							alt={"thumbnail"}
						/>
					</div>
					<div className={styles.header}>
						<h1>{activeBusiness.name}</h1>
						<h3>
							{activeBusiness.city},{" "}
							{activeBusiness.contact.street}
						</h3>
					</div>
					<div className={styles.services}>
						<h2>Usługi</h2>
						<ServicesList
							servicesList={servicesList}
							business={activeBusiness}
						/>
					</div>
					<div className={styles.opinions}>
						<RatingList
							ratingList={ratingList}
							key={activeBusiness.id}
						/>
					</div>
				</div>
				<div className={styles.infoWrapper}>
					<div className={styles.info}>
						<div>
							<h4>O nas</h4>
							<p>{activeBusiness.info}</p>
						</div>
						<div className={styles.infoHours}>
							<h4>Godziny otwarcia </h4>
							{/* dodać godziny otwarcia */}
							<p>
								Poniedziałek <span>10:00 - 16:00</span>
							</p>
							<p>
								Wtorek <span>10:00 - 16:00</span>
							</p>
							<p>
								Środa <span>10:00 - 16:00</span>
							</p>
							<p>
								Czwartek <span>10:00 - 16:00</span>
							</p>
							<p>
								Piątek <span>10:00 - 16:00</span>
							</p>
							<p>
								Sobota <span>zamknięte</span>
							</p>
							<p>
								Niedziela <span>zamknięte</span>
							</p>
							<h4>Kontakt</h4>
							<p>
								Telefon{" "}
								<span>{activeBusiness.contact.phone}</span>
							</p>
							<p>
								E-mail{" "}
								<span>{activeBusiness.contact.email}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProductView;
