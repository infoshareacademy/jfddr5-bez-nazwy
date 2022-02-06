import { Route, Routes } from "react-router-dom";
import { pathNormalize } from "../../utils/pathNormalize";
import CategoryView from "../../views/CategoryView";

const FilterPaths = ({ category, city }) => {
	const cityPath = pathNormalize(city);
	const categoryPath = pathNormalize(category);

	return (
		<Routes>
			<Route
				path={`${categoryPath}`}
				element={
					<CategoryView city={city} category={category} />
				}></Route>
			<Route
				path={`${cityPath}`}
				element={
					<CategoryView city={city} category={category} />
				}></Route>
			<Route
				path={`${categoryPath}/${cityPath}`}
				element={
					<CategoryView city={city} category={category} />
				}></Route>
		</Routes>
	);
};

export default FilterPaths;
