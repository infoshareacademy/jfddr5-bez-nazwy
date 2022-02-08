import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useState, useEffect } from "react";
import { auth, getBusinessList, getServicesList } from "./utils/db";
import { businessListContext } from "./contexts/BusinessListContext";
import { currentUserContext } from "./contexts/CurrentUserContext";
import "./App.css";

import Header from "./components/Header/Header";
import CategoryView from "./views/CategoryView";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [businessList, setBusinessList] = useState([]);

	const [servicesList, setServicesList] = useState([]);

	const [category, setCategory] = useState("");
	const [city, setCity] = useState("");

	const [product, setProduct] = useState("");

	const [showLogin, setShowLogin] = useState(false);

	useEffect(() => {
		return auth.onAuthStateChanged(setCurrentUser);
	}, []);

	useEffect(() => {
		getBusinessList(setBusinessList);
		return () => setBusinessList([]);
	}, []);

	useEffect(() => {
		console.log(businessList);
		setServicesList([]);
		businessList.forEach((bus) => {
			getServicesList(setServicesList, bus.id);
		});
		return () => setServicesList([]);
	}, [businessList]);

	useEffect(() => {
		console.log(servicesList);
	}, [city]);

	return (
		<currentUserContext.Provider value={[currentUser, setCurrentUser]}>
			<businessListContext.Provider
				value={[businessList, setBusinessList]}>
				<Header
					product={product}
					setProduct={setProduct}
					setCategory={setCategory}
					category={category}
					city={city}
					setCity={setCity}
					showLogin={showLogin}
					setShowLogin={setShowLogin}
					// currentUser={currentUser}
				/>
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
								// currentUser={currentUser}
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
								showLogin={showLogin}
								setShowLogin={setShowLogin}
							/>
						}
					/>

					<Route
						path="/s"
						element={
							<CategoryView
								setServicesList={setServicesList}
								servicesList={servicesList}
							/>
						}
					/>
					{/* <Route
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
					}></Route> */}
					<Route path="/profile" element={<ProfileView />} />
				</Routes>
			</businessListContext.Provider>
		</currentUserContext.Provider>
	);
}

export default App;
