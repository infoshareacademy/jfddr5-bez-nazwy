import star from "./images/star.png";
import styles from "./Rating.module.css";

const Rating = ({ rating }) => {
	const stars = [0, 1, 2, 3, 4];
	const ratingArray = Array.from(Array(rating.value).keys());

	return (
		<div className={styles.comment}>
			<div className={styles.opinionsHeader}>
				<h3>{rating.user}</h3>
				<div className={styles.starsContainer}>
					<div className={styles.starWrapper}>
						{stars.map((item) => (
							<img
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
			</div>
			{rating.comment}
		</div>
	);
};

export default Rating;
