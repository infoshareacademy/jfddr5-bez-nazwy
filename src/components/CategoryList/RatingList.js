import { useState, useEffect } from "react";
import ProductView from "../../views/ProductView";
import Rating from "./Rating";

const RatingList = ({ business, ratingList }) => {
	const [sort, setSort] = useState("default");
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
			<button onClick={() => sortingOpinion("desc")}>
				Sortuj od najwyższych ocen
			</button>
			<button onClick={() => sortingOpinion("asc")}>
				Sortuj od najniższych ocen
			</button>

			{ratingList?.map((bus) => (
				<div key={bus.businessId}>
					{bus.businessId === business.id
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
