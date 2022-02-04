import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useState, useEffect } from "react";
import { auth, getBusinessList } from "./utils/db";
import { businessListContext } from "./contexts/BusinessListContext";
import CategoryListBar from "./components/Header/CategoryListBar/CategoryListBar";
import Header from "./components/Header/Header";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [businessList, setBusinessList] = useState([]);
	const [product, setProduct] = useState("");

	useEffect(() => {
		return auth.onAuthStateChanged(setCurrentUser);
	}, []);

	useEffect(() => {
		getBusinessList(setBusinessList);
	}, []);

	return (
		<businessListContext.Provider value={businessList}>
			<Routes>
				<Route
					path="*"
					element={
						<>
							<CategoryListBar />
						</>
					}></Route>
				<Route
					path="/profile"
					element={<Header currentUser={currentUser} />}></Route>
			</Routes>
			<Routes>
				<Route
					path="*"
					element={
						<HomeView
							product={product}
							setProduct={setProduct}
							currentUser={currentUser}
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
		</businessListContext.Provider>
	);
}

export default App;
