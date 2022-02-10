import star from "./images/star.png";
import styles from "./Rating.module.css";

const Rating = ({ rating }) => {
	const stars = [0, 1, 2, 3, 4];
	const ratingArray = Array.from(Array(rating.value).keys());

	return (
		<div>
			<h3>{rating.user}</h3>
			<div>
				<div>
					{stars.map(() => (
						<img src={star} className={styles.star} />
					))}
				</div>
				{rating.value} {rating.comment}
			</div>
		</div>
	);
};

export default Rating;
