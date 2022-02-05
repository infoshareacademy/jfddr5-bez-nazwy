import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { businessListContext } from "../../contexts/BusinessListContext";
import { BusinessListItem } from "./BusinessListItem";

const FilteredBusinessList = ({ category, city }) => {
	const businessList = useContext(businessListContext);
	return (
		<Routes>
			<Route
				path={category}
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
				path={city}
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
		</Routes>
	);
};

export default FilteredBusinessList;
