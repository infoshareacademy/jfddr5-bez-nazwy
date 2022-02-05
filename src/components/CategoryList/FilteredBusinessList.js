import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { businessListContext } from "../../contexts/BusinessListContext";
import { pathNormalize } from "../../utils/pathNormalize";
import { BusinessListItem } from "./BusinessListItem";

const FilteredBusinessList = ({ category, city }) => {
	const businessList = useContext(businessListContext);

	const cityPath = pathNormalize(city);
	const categoryPath = pathNormalize(category);

	return (
		<Routes>
			<Route
				path={`${categoryPath}`}
				element={businessList.map((business) => {
					if (business.category === category) {
						return (
							<BusinessListItem
								key={business.id}
								business={business}
							/>
						);
					}
				})}></Route>
			<Route
				path={`${cityPath}`}
				element={businessList.map((business) => {
					if (business.city === city) {
						return (
							<BusinessListItem
								key={business.id}
								business={business}
							/>
						);
					}
				})}></Route>
			<Route
				path={`${categoryPath}/${cityPath}`}
				element={businessList.map((business) => {
					if (
						business.city === city &&
						business.category === category
					) {
						return (
							<BusinessListItem
								key={business.id}
								business={business}
							/>
						);
					}
				})}></Route>
		</Routes>
	);
};

export default FilteredBusinessList;
