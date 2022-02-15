import { useContext, useEffect, useState } from "react";
import { businessItemContext } from "../../contexts/BusinessItemContext";
import { ratingContext } from "../../contexts/RatingContext";
import { serviceItemContext } from "../../contexts/ServiceItemContext";
import { addOpinion, getRating } from "../../utils/db";
import styles from "./Rating.module.css";
import star from "./images/star.png";

export const OpinionForm = () => {
	const [activeBusiness] = useContext(businessItemContext);
	const [activeService] = useContext(serviceItemContext);
	const [ratingList, setRatingList] = useContext(ratingContext);

	const [comment, setComment] = useState("");
	const [ratingArray, setRatingArray] = useState([]);

	const stars = [0, 1, 2, 3, 4];

	useEffect(() => {
		console.log(ratingArray.length);
	}, [ratingArray]);

	const handleOpinionSubmit = (e) => {
		e.preventDefault();
		if (ratingArray.length > 0) {
			console.log(activeBusiness, activeService);
			addOpinion(
				activeBusiness.id,
				activeBusiness.name,
				comment,
				ratingArray.length,
			); //(businessId, businessName, serviceId, serviceName, comment, value)
			getRating(setRatingList, activeBusiness.id);
			console.log(ratingList);
			setComment("");
			setRatingArray([]);
		}
	};

	return (
		<form
			id="opinion-form"
			onSubmit={handleOpinionSubmit}
			className={styles.opinionForm}>
			<h3>Dodaj komentarz</h3>

			<textarea
				className={styles.textarea}
				form="opinion-form"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				placeholder="Podziel się z nami swoją opinią!"
				required></textarea>
			<div className={styles.submitForm}>
				<div className={styles.starsContainer}>
					<div className={styles.starWrapper}>
						{stars.map((item) => (
							<img
								onClick={() => {
									setRatingArray(
										Array.from(Array(item + 1).keys()),
									);
								}}
								key={item}
								src={star}
								className={styles.star}
							/>
						))}
					</div>
					<div className={styles.ratedStars}>
						{ratingArray.map((item) => (
							<img
								key={item}
								src={star}
								className={styles.star}
							/>
						))}
					</div>
				</div>
				<button type="submit" className={styles.servicesButton}>
					Dodaj opinię
				</button>
			</div>
		</form>
	);
};
