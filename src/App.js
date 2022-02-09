import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useState, useEffect } from "react";
import { auth, getBusinessList, getServicesList, getRating } from "./utils/db";
import { businessListContext } from "./contexts/BusinessListContext";
import { currentUserContext } from "./contexts/CurrentUserContext";
import "./App.css";
import CategoryView from "./views/CategoryView";
import Modal from "./components/Header/UserFormModal/UserFormModal";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [businessList, setBusinessList] = useState([]);
	const [servicesList, setServicesList] = useState([]);

	const [ratingList, setRatingList] = useState([]);
  
	const [category, setCategory] = useState("");
	const [city, setCity] = useState("");
	const [product, setProduct] = useState("");

	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	useEffect(() => {
		return auth.onAuthStateChanged(setCurrentUser);
	}, []);

	useEffect(() => {
		getBusinessList(setBusinessList);
		return () => setBusinessList([]);
	}, []);

	useEffect(() => {
		businessList.map((bus) => {
			getRating(setRatingList, bus.id);
		});
		console.log(ratingList);
		return () => setRatingList([]);
	}, [businessList]);

	useEffect(() => {
		businessList.map((bus) => {
		setServicesList([]);
		businessList.forEach((bus) => {
			getServicesList(setServicesList, bus.id);
		});
		return () => setServicesList([]);
	}, [businessList]);

	useEffect(() => {
		console.log(ratingList);
	}, [category]);

	return (
		<businessListContext.Provider value={[businessList, setBusinessList]}>
			<currentUserContext.Provider value={[currentUser, setCurrentUser]}>
				<Modal
					showLogin={showLogin}
					showRegister={showRegister}
					onClose={() =>
						setShowLogin(false) || setShowRegister(false)
					}
				/>
				<Routes>
					<Route
						path="/"
						element={
							<HomeView
								product={product}
								setProduct={setProduct}
								setCategory={setCategory}
								setCity={setCity}
								city={city}
								showLogin={showLogin}
								setShowLogin={setShowLogin}
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
								setShowRegister={setShowRegister}
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
							ratingList={ratingList}
							setRatingList={setRatingList}
						/>
					}
				/>
					<Route
						path="/s"
						element={
							<CategoryView
								setServicesList={setServicesList}
								servicesList={servicesList}
								setProduct={setProduct}
							/>
						}
					/>


					{currentUser && (
						<Route path="/profile" element={<ProfileView />} />
					)}
				</Routes>
			</currentUserContext.Provider>
		</businessListContext.Provider>
	);
}

export default App;
