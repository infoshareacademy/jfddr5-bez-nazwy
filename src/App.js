import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useState, useEffect } from "react";
import { auth, getBusinessList } from "./utils/db";
import { businessListContext } from "./contexts/BusinessListContext";

import CategoryListBar from "./components/Header/CategoryListBar/CategoryListBar";
import Header from "./components/Header/Header";
import FilterPaths from "./components/CategoryList/FilterPaths";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [businessList, setBusinessList] = useState([]);

	const [servicesList, setServicesList] = useState([]);

	const [category, setCategory] = useState("");
	const [city, setCity] = useState("");

	const [product, setProduct] = useState("");

	useEffect(() => {
		return auth.onAuthStateChanged(setCurrentUser);
	}, []);

	useEffect(() => {
		getBusinessList(setBusinessList);
	}, []);

	return (
		<businessListContext.Provider value={[businessList, setBusinessList]}>
			<Routes>
				{/* <Route
					path="*"
					element={
						<>
							<CategoryListBar
								category={category}
								setCategory={setCategory}
								setServicesList={setServicesList}
								servicesList={servicesList}
							/>
						</>
					}></Route>
				<Route
					path="/profile"
					element={<Header currentUser={currentUser} />}></Route> */}
			</Routes>
			<Routes>
				<Route
					path="/"
					element={
						<HomeView
							product={product}
							setProduct={setProduct}
							currentUser={currentUser}
							setCategory={setCategory}
							setCity={setCity}
							city={city}
						/>
					}
				/>

				<Route
					path={`/product/${product.id}`}
					element={
						<ProductView
							product={product}
							setServicesList={setServicesList}
							servicesList={servicesList}
						/>
					}
				/>
				<Route path="/profile" element={<ProfileView />} />
			</Routes>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<CategoryListBar
								category={category}
								setCategory={setCategory}
							/>
						</>
					}></Route>
				<Route
					path="/profile"
					element={<Header currentUser={currentUser} />}></Route>
			</Routes>
			<FilterPaths
				city={city}
				category={category}
				setServicesList={setServicesList}
				servicesList={servicesList}
			/>
		</businessListContext.Provider>
	);
}

export default App;
