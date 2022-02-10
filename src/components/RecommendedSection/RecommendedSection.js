import styles from "./RecommendedSection.module.css";
import sampleImage from "../../views/images/slideshow3.jpg";
import Flickity from "react-flickity-component";

const flickityOptions = {
	initialIndex: 1,
};

const RecommendedSection = () => {
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
				<div className={styles.galleryItem}>
					<div className={styles.galleryItemRating}>
						<h4 className={styles.galleryItemRatingHeader}>5</h4>
						<p className={styles.galleryItemRatingText}>
							12 opinii
						</p>
					</div>
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
					<div className={styles.galleryItemBanner}>
						<h3 className={styles.galleryItemTitle}>Top Cat</h3>
						<p className={styles.galleryItemAddress}>Warszawa</p>
					</div>
				</div>
				<div className={styles.galleryItem}>
					<div className={styles.galleryItemRating}>
						<h4 className={styles.galleryItemRatingHeader}>5</h4>
						<p className={styles.galleryItemRatingText}>
							12 opinii
						</p>
					</div>
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
					<div className={styles.galleryItemBanner}>
						<h3 className={styles.galleryItemTitle}>Top Cat</h3>
						<p className={styles.galleryItemAddress}>Warszawa</p>
					</div>
				</div>
				<div className={styles.galleryItem}>
					<div className={styles.galleryItemRating}>
						<h4 className={styles.galleryItemRatingHeader}>5</h4>
						<p className={styles.galleryItemRatingText}>
							12 opinii
						</p>
					</div>
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
					<div className={styles.galleryItemBanner}>
						<h3 className={styles.galleryItemTitle}>Top Cat</h3>
						<p className={styles.galleryItemAddress}>Warszawa</p>
					</div>
				</div>
				<div className={styles.galleryItem}>
					<div className={styles.galleryItemRating}>
						<h4 className={styles.galleryItemRatingHeader}>5</h4>
						<p className={styles.galleryItemRatingText}>
							12 opinii
						</p>
					</div>
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
					<div className={styles.galleryItemBanner}>
						<h3 className={styles.galleryItemTitle}>Top Cat</h3>
						<p className={styles.galleryItemAddress}>Warszawa</p>
					</div>
				</div>
			</Flickity>
		</div>
	);
};

export default RecommendedSection;
