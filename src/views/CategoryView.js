import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryList from "../components/CategoryList/CategoryList";
import { businessListContext } from "../contexts/BusinessListContext";
import { pathNormalize } from "../utils/pathNormalize";

const CategoryView = ({ setServicesList, servicesList, setProduct }) => {
	const [businessList] = useContext(businessListContext);
	const [searchParams] = useSearchParams();

	const city = pathNormalize(searchParams.get("city") ?? "");
	const category = pathNormalize(searchParams.get("category") ?? "");

	return (
		<div>
			{businessList
				.filter(
					(business) =>
						(pathNormalize(business.category) === category &&
							!city) ||
						(pathNormalize(business.city) === city && !category) ||
						(pathNormalize(business.city) === city &&
							pathNormalize(business.category) === category),
				)
				.map((business) => (
					<CategoryList
						key={business.id}
						business={business}
						setServicesList={setServicesList}
						servicesList={servicesList}
						setProduct={setProduct}
					/>
				))}
		</div>
	);
};

export default CategoryView;
