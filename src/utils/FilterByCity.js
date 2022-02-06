import FilteredBusinessList from "../components/CategoryList/FilteredBusinessList";

const FilterByCity = ({ businessList, city }) => {
	const cityList = Array.from(
		new Set(businessList.map((business) => business.city)),
	);

	return (
		<Routes>
			<Route
				path={city}
				element={businessList.map((business) => {
					if (business.city === city) {
						return (
							<FilteredBusinessList
								key={business.id}
								business={business}
							/>
						);
					}
				})}></Route>
		</Routes>
	);
};

export default FilterByCity;
