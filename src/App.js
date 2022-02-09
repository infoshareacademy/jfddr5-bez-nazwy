import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";

import { useEffect, useState } from "react";
import { getBusinessList } from "./utils/db";
import itemView from "./components/CategoryList/CategoryList"

import { useState, useEffect } from "react";
import { auth, getBusinessList, getServicesList } from "./utils/db";
import { businessListContext } from "./contexts/BusinessListContext";
import "./App.css";

import Header from "./components/Header/Header";
import CategoryView from "./views/CategoryView";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [businessList, setBusinessList] = useState([]);
	const [product, setProduct] = useState("");
	const [category, setCategory] = useState("");

	useEffect(() => {
		return auth.onAuthStateChanged(setCurrentUser);
	}, []);

	useEffect(() => {
		getBusinessList(setBusinessList);
		return () => setBusinessList([]);
	}, []);

	useEffect(() => {
		businessList.map((bus) => {
			getServicesList(setServicesList, bus.id);
		});
		return () => setServicesList([]);
	}, [businessList]);

	useEffect(() => {
		console.log(servicesList);
	}, [category]);
	return (
		<businessListContext.Provider value={[businessList, setBusinessList]}>
			<Header
				product={product}
				setProduct={setProduct}
				setCategory={setCategory}
				category={category}
				city={city}
				setCity={setCity}
				currentUser={currentUser}
			/>
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
			<Routes>
				<Route
					path="*"
					element={
						<HomeView
							product={product}
							setProduct={setProduct}
							currentUser={currentUser}
							setCategory={setCategory}
						/>
					}
				/>
				<Route path="/category" element={<CategoryView />} />

				<Route
					path={`/product/${product.id}`}
					element={<ProductView product={product} />}
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
	);
}

export default App;
