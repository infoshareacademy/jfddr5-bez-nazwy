import styles from "./Rating.module.css";
import star from "./images/star.png";
import React, { FormEvent, useState } from "react";
import { addOpinion, getRating, User } from "../../utils/db";
import { useBusinessItemContext } from "../../contexts/BusinessItemContext";
import { useCurrentUserContext } from "../../contexts/CurrentUserContext";
import { useRatingListContext } from "../../contexts/RatingContext";
import { useUserListContext } from "../../contexts/usersListContext";

export const OpinionForm = () => {
	const [activeBusiness] = useBusinessItemContext();
	const [, setRatingList] = useRatingListContext();
	const [usersList] = useUserListContext();
	const [currentUser] = useCurrentUserContext();
	const [comment, setComment] = useState("");

	const [ratingArray, setRatingArray] = useState<number[]>([]);

	const stars = [0, 1, 2, 3, 4];

	const handleOpinionSubmit = (e: FormEvent): void => {
		e.preventDefault();

		const myUser = usersList.find((user) => user.uid === currentUser?.uid);

		if (myUser === undefined || activeBusiness === null) {
			return;
		}
		if (ratingArray.length > 0) {
			addOpinion(
				activeBusiness.id,
				activeBusiness.name,
				comment,
				ratingArray.length,
				myUser.username,
			); //(businessId, businessName, serviceId, serviceName, comment, value)
			getRating(setRatingList, activeBusiness.id);

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
									setRatingArray(stars.slice(0, item + 1));
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
