import { useState, useEffect, useContext } from "react";
import { businessItemContext } from "../../contexts/BusinessItemContext";
import Rating from "./Rating";
import styles from "./Rating.module.css";

const RatingList = ({ ratingList }) => {
	const [sort, setSort] = useState("default");
	const [activeBusiness] = useContext(businessItemContext);
	const sortingOpinion = (a) => {
		setSort(a);
	};
	useEffect(() => {
		return () => setSort("default");
	}, []);

	const sorting = (n1, n2) => {
		if (sort === "default") {
			return n1.value === n2.value ? 1 : -1;
		}
		if (sort === "desc") {
			return n1.value < n2.value ? 1 : -1;
		} else {
			return n1.value > n2.value ? 1 : -1;
		}
	};

	return (
		<>
			<div className={styles.sortButtonsWrapper}>
				<h2 className={styles.opinionsH2}>Opinie</h2>
				<div>
					<button
						className={`${
							sort === "desc"
								? styles.sortButtonActive
								: styles.sortButton
						}`}
						onClick={() => sortingOpinion("desc")}>
						Sortuj od najwyższych ocen
					</button>
					<button
						className={`${
							sort === "asc"
								? styles.sortButtonActive
								: styles.sortButton
						}`}
						onClick={() => sortingOpinion("asc")}>
						Sortuj od najniższych ocen
					</button>
				</div>
			</div>
			{ratingList?.map((bus) => (
				<div key={bus.businessId}>
					{bus.businessId === activeBusiness.id
						? bus.rating
								.sort(sorting)
								.map((rating) => (
									<Rating key={rating.id} rating={rating} />
								))
						: null}
				</div>
			))}
		</>
	);
};

export default RatingList;
