import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useState, useEffect, useRef } from "react";
import { auth, getBusinessList } from "./utils/db";
import { businessListContext } from "./contexts/BusinessListContext";
import CategoryListBar from "./components/Header/CategoryListBar/CategoryListBar";
import Header from "./components/Header/Header";
import FilterPaths from "./components/CategoryList/FilterPaths";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [businessList, setBusinessList] = useState([]);
	const [category, setCategory] = useState("");
	const [city, setCity] = useState("");

	const [product, setProduct] = useState("");

	const businessListRef = useRef();
	console.log(businessListRef);

	useEffect(() => {
		return auth.onAuthStateChanged(setCurrentUser);
	}, []);

	useEffect(() => {
		getBusinessList(setBusinessList);
		businessListRef.current = businessList;
	}, []);

	return (
		<businessListContext.Provider value={businessList}>
			<Routes>
				<Route
					path="*"
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
				<Route path="/category" element={<CategoryView />} />

				<Route
					path={`/product/${product.id}`}
					element={<ProductView product={product} />}
				/>
				<Route path="/profile" element={<ProfileView />} />
			</Routes>
			<Routes>
				<Route
					path="*"
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
			<FilterPaths city={city} category={category} />
		</businessListContext.Provider>
	);
}

export default App;
