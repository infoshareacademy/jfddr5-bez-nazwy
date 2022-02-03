import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useState, useEffect } from "react";
import { auth, getBusinessList } from "./utils/db";
import { businessListContext } from "./contexts/BusinessListContext";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
  const [businessList, setBusinessList] = useState([]);

	useEffect(() => {
		return auth.onAuthStateChanged(setCurrentUser);
	}, []);

  useEffect(() => {
		getBusinessList(setBusinessList);
		console.log(businessList);
	}, []);
  
	return (
    <businessListContext.Provider value={businessList}>
		<Routes>
			<Route path="/" element={<HomeView currentUser={currentUser} />} />
			<Route path="/category" element={<CategoryView />} />
			<Route path="/product" element={<ProductView />} />
			<Route path="/profile" element={<ProfileView />} />
		</Routes>
    </businessListContext.Provider>
	);
}

export default App;
