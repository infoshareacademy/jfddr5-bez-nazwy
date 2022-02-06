import { Route, Routes } from "react-router-dom";
import { pathNormalize } from "../../utils/pathNormalize";
import CategoryView from "../../views/CategoryView";

const FilterPaths = ({ category, city, setServicesList, servicesList }) => {
	const cityPath = pathNormalize(city);
	const categoryPath = pathNormalize(category);

	return (
		<Routes>
			<Route
				path={`${categoryPath}`}
				element={
					<CategoryView
						city={city}
						category={category}
						setServicesList={setServicesList}
						servicesList={servicesList}
					/>
				}></Route>
			<Route
				path={`${cityPath}`}
				element={
					<CategoryView
						city={city}
						category={category}
						setServicesList={setServicesList}
						servicesList={servicesList}
					/>
				}></Route>
			<Route
				path={`${categoryPath}/${cityPath}`}
				element={
					<CategoryView
						city={city}
						category={category}
						setServicesList={setServicesList}
						servicesList={servicesList}
					/>
				}></Route>
		</Routes>
	);
};

export default FilterPaths;
