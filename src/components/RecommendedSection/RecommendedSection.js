import styles from "./RecommendedSection.module.css";
import sampleImage from "../../views/images/slideshow3.jpg";
import Flickity from "react-flickity-component";
import { useContext } from "react";
import { businessListContext } from "../../contexts/BusinessListContext";
import { ratingContext } from "../../contexts/RatingContext";

const flickityOptions = {
	initialIndex: 1,
};

const RecommendedSection = () => {
	const [businessList] = useContext(businessListContext);
	const [ratingList] = useContext(ratingContext);

	console.log(ratingList);

	const ratings = ratingList
		?.map(({ businessId, rating }) => {
			const avg =
				rating
					.map(({ value }) => value)
					.reduce((total, next) => total + next, 0) / rating.length;
			return {
				businessId,
				avgRating: avg,
				avgRatingLength: rating.length,
			};
		})
		.sort((a, b) => a.avgRating - b.avgRating)
		.map((item) => {
			const business = businessList.find(
				(business) => business.id === item.businessId,
			);
			return {
				business,
				avgRating: item.avgRating,
				avgRatingLength: item.avgRatingLength,
			};
		});

	const topRating = ratings[0];
	console.log(topRating);
	console.log(ratings.map((item) => item.avgRating));
	//danke shon!

	// et, voila! :D

	// to dalej już się bawcie sami :D
	//dobrze, dziękujęmy super bardzo <3
	// AWWWW :D

	//<333

	// {
	// 	ratings.map((item) => {
	// 		return (
	// 			<div className={styles.galleryItem}>
	// 				<div className={styles.galleryItemRating}>
	// 					<h4 className={styles.galleryItemRatingHeader}>
	// 						{item.avgRating}
	// 					</h4>
	// 					<p className={styles.galleryItemRatingText}>
	// 						{item.avgRatingLength} opinii
	// 					</p>
	// 				</div>
	// 				<img
	// 					className={styles.galleryItemImage}
	// 					src={item.business.photo}></img>
	// 				<div className={styles.galleryItemBanner}>
	// 					<h3 className={styles.galleryItemTitle}>
	// 						{item.business.name}
	// 					</h3>
	// 					<p className={styles.galleryItemAddress}>
	// 						{item.business.city}
	// 					</p>
	// 				</div>
	// 			</div>
	// 		);
	// 	});
	// }

	console.log(ratings);

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
				{ratings?.map((item) => (
					<div key={item.business.id} className={styles.galleryItem}>
						<div className={styles.galleryItemRating}>
							<h4 className={styles.galleryItemRatingHeader}>
								{item.avgRating}
							</h4>
							<p className={styles.galleryItemRatingText}>
								{item.avgRatingLength} opinii
							</p>
						</div>
						<img
							className={styles.galleryItemImage}
							src={item.business.photo}></img>
						<div className={styles.galleryItemBanner}>
							<h3 className={styles.galleryItemTitle}>
								{item.business.name}
							</h3>
							<p className={styles.galleryItemAddress}>
								{item.business.city}
							</p>
						</div>
					</div>
				))}
				{ratings?.map((item) => (
					<div key={item.business.id} className={styles.galleryItem}>
						<div className={styles.galleryItemRating}>
							<h4 className={styles.galleryItemRatingHeader}>
								{item.avgRating}
							</h4>
							<p className={styles.galleryItemRatingText}>
								{item.avgRatingLength} opinii
							</p>
						</div>
						<img
							className={styles.galleryItemImage}
							src={item.business.photo}></img>
						<div className={styles.galleryItemBanner}>
							<h3 className={styles.galleryItemTitle}>
								{item.business.name}
							</h3>
							<p className={styles.galleryItemAddress}>
								{item.business.city}
							</p>
						</div>
					</div>
				))}
				{ratings?.map((item) => (
					<div key={item.business.id} className={styles.galleryItem}>
						<div className={styles.galleryItemRating}>
							<h4 className={styles.galleryItemRatingHeader}>
								{item.avgRating}
							</h4>
							<p className={styles.galleryItemRatingText}>
								{item.avgRatingLength} opinii
							</p>
						</div>
						<img
							className={styles.galleryItemImage}
							src={item.business.photo}></img>
						<div className={styles.galleryItemBanner}>
							<h3 className={styles.galleryItemTitle}>
								{item.business.name}
							</h3>
							<p className={styles.galleryItemAddress}>
								{item.business.city}
							</p>
						</div>
					</div>
				))}
				{/* <div className={styles.galleryItem}>
					<div className={styles.galleryItemRating}>
						<h4 className={styles.galleryItemRatingHeader}>
							{topRating.avgRating}
						</h4>
						<p className={styles.galleryItemRatingText}>
							12 opinii
						</p>
					</div>
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
					<div className={styles.galleryItemBanner}>
						<h3 className={styles.galleryItemTitle}>Top C</h3>
						<p className={styles.galleryItemAddress}>topcat</p>
					</div>
				</div> */}
			</Flickity>
		</div>
	);
};

export default RecommendedSection;
