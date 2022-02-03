import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useState, useEffect } from "react";
import { auth } from "./utils/db";

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		return auth.onAuthStateChanged(setCurrentUser);
	}, []);

	return (
		<Routes>
			<Route path="/" element={<HomeView currentUser={currentUser} />} />
			<Route path="/category" element={<CategoryView />} />
			<Route path="/product" element={<ProductView />} />
			<Route path="/profile" element={<ProfileView />} />
		</Routes>
	);
}

export default App;
