import { useState, useEffect } from "react";
import { useBusinessItemContext } from "../../contexts/BusinessItemContext";
import { useCurrentUserContext } from "../../contexts/CurrentUserContext";
import { BusinessRating, Rating as Opinion } from "../../utils/db";
import { OpinionForm } from "./OpinionForm";
import Rating from "./Rating";
import styles from "./Rating.module.css";

interface Props {
	ratingList: BusinessRating[];
}

const RatingList = ({ ratingList }: Props) => {
	const [sort, setSort] = useState("default");
	const [activeBusiness] = useBusinessItemContext();
	const [currentUser] = useCurrentUserContext();

	const sortingOpinion = (a: string): void => {
		setSort(a);
	};
	useEffect(() => {
		return () => setSort("default");
	}, []);

	const sorting = (n1: Opinion, n2: Opinion): number => {
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
		<div>
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
				<div key={bus.businessId} className={styles.opinionWrapper}>
					{bus.businessId === activeBusiness.id
						? bus.rating
								.sort(sorting)
								.map((rating) => (
									<Rating key={rating.id} rating={rating} />
								))
						: null}
				</div>
			))}
			{currentUser ? (
				<OpinionForm />
			) : (
				<h3 className={styles.notLoggedHeader}>
					Musisz być zalogowanym, żeby dodawać opinie
				</h3>
			)}
		</div>
	);
};

export default RatingList;
