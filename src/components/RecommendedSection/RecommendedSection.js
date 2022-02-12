import styles from "./RecommendedSection.module.css";
import Flickity from "react-flickity-component";
import { useContext } from "react";
import { businessListContext } from "../../contexts/BusinessListContext";
import { ratingContext } from "../../contexts/RatingContext";
import { businessItemContext } from "../../contexts/BusinessItemContext";
import { useNavigate } from "react-router-dom";

const flickityOptions = {
	initialIndex: 1,
};

const RecommendedSection = () => {
	const [businessList] = useContext(businessListContext);
	const [ratingList] = useContext(ratingContext);
	const [activeBusiness, setActiveBusiness] = useContext(businessItemContext);
	const navigate = useNavigate();

	const handleClick = (business) => {
		setActiveBusiness(business);
		navigate(`/product/${business.id}`);
	};

	const ratings = ratingList
		?.map(({ businessId, rating }) => {
			const avg =
				rating
					.map(({ value }) => value)
					.reduce((total, next) => total + next, 0) / rating.length;
			return {
				businessId,
				avgRating: avg.toFixed(1),
				avgRatingLength: rating.length,
			};
		})
		.sort((a, b) => b.avgRating - a.avgRating)
		.map((item) => {
			const business = businessList.find(
				(business) => business.id === item.businessId,
			);
			return {
				business,
				avgRating: item.avgRating,
				avgRatingLength: item.avgRatingLength,
			};
		})
		.slice(0, 5);

	console.log(ratings);

	//danke shon!
	// et, voila! :D
	// to dalej już się bawcie sami :D
	//dobrze, dziękujęmy super bardzo <3
	// AWWWW :D
	//<333

	return (
		<div className={styles.contentWrapper}>
			<h2 className={styles.recommendedHeader}>Polecane</h2>
			<Flickity
				className={styles.galleryWrapper}
				elementType={"div"}
				options={flickityOptions}
				disableImagesLoaded={false}
				reloadOnUpdate
				static>
				{ratings?.map((item, index) => (
					<div key={index} className={styles.galleryItem}>
						<img
							onClick={() => handleClick(item.business)}
							className={styles.galleryItemImage}
							src={item.business.photo}
							alt={"thumbnail"}></img>
						<div className={styles.galleryItemRating}>
							<h4 className={styles.galleryItemRatingHeader}>
								{item.avgRating}
							</h4>
							<p className={styles.galleryItemRatingText}>
								Opinie: {item.avgRatingLength}
							</p>
						</div>
						<div className={styles.galleryItemBanner}>
							<h3 className={styles.galleryItemTitle}>
								{item.business.name}
							</h3>
							<p className={styles.galleryItemDetails}>
								{item.business.category} - {item.business.city}
							</p>
						</div>
					</div>
				))}
			</Flickity>
		</div>
	);
};

export default RecommendedSection;
