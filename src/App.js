import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useEffect, useState } from "react";
import { getBusinessList } from "./utils/db";

function App() {
	const [businessList, setBusinessList] = useState([]);
	const [productId, setProductId] = useState("");
	useEffect(() => {
		getBusinessList(setBusinessList);
		console.log(businessList);
	}, []);
	return (
		<Routes>
			<Route
				path="/"
				element={
					<HomeView
						productId={productId}
						setProductId={setProductId}
						businessList={businessList}
						setBusinessList={setBusinessList}
					/>
				}
			/>
			<Route path="/category" element={<CategoryView />} />
			<Route
				path={`/product/${productId}`}
				element={<ProductView productId={productId} />}
			/>
			<Route path="/profile" element={<ProfileView />} />
		</Routes>
	);
}

export default App;
