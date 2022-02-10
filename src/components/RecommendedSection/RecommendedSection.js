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
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
				</div>
				<div className={styles.galleryItem}>
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
				</div>
				<div className={styles.galleryItem}>
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
				</div>
				<div className={styles.galleryItem}>
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
				</div>
				<div className={styles.galleryItem}>
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
				</div>
				<div className={styles.galleryItem}>
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
				</div>
				<div className={styles.galleryItem}>
					<img
						className={styles.galleryItemImage}
						src={sampleImage}></img>
				</div>
			</Flickity>
		</div>
	);
};

export default RecommendedSection;
