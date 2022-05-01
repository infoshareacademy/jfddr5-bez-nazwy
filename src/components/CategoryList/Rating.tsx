import { Rating as RatingType } from "../../utils/db";
import star from "./images/star.png";
import styles from "./Rating.module.css";

interface Props {
	rating: RatingType;
}

const Rating = ({ rating }: Props) => {
	const stars = [0, 1, 2, 3, 4];
	const ratingArray = stars.slice(0, rating.value);

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
			<p>{rating.comment}</p>
		</div>
	);
};

export default Rating;
