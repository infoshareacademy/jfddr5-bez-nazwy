import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useState, useEffect } from "react";
import { auth, getBusinessList, getServicesList } from "./utils/db";
import { businessListContext } from "./contexts/BusinessListContext";
import { currentUserContext } from "./contexts/CurrentUserContext";
import "./App.css";
import CategoryView from "./views/CategoryView";
import Modal from "./components/Modal/Modal";
import { modalDisplayContext } from "./contexts/ModalDisplayContext";
import { serviceItemContext } from "./contexts/ServiceItemContext";
import { businessItemContext } from "./contexts/BusinessItemContext";

function App() {
	//USE STATES

	//context states
	const [currentUser, setCurrentUser] = useState(null);
	const [businessList, setBusinessList] = useState([]);
	const [activeBusiness, setActiveBusiness] = useState("");
	const [activeService, setActiveService] = useState("");
	const [modalDisplay, setModalDisplay] = useState("");
	//service list state
	//todo: assign to context!!!!
	const [servicesList, setServicesList] = useState([]);
	//category & city states
	const [category, setCategory] = useState("");
	const [city, setCity] = useState("");
	//modal form state
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	//USE EFFECTS - FETCHING DATA
	useEffect(() => {
		return auth.onAuthStateChanged(setCurrentUser);
	}, []);

	useEffect(() => {
		getBusinessList(setBusinessList);
		return () => setBusinessList([]);
	}, []);

	useEffect(() => {
		setServicesList([]);
		businessList.forEach((bus) => {
			getServicesList(setServicesList, bus.id);
		});
		return () => setServicesList([]);
	}, [businessList]);

	useEffect(() => {
		console.log(servicesList);
	}, [category]);

	return (
		//todo: simplifying contexts!!!! (businessContext value={[businessList, activeBusiness, setBusinessList, setActiveBusiness]})
		<businessListContext.Provider value={[businessList, setBusinessList]}>
			<currentUserContext.Provider value={[currentUser, setCurrentUser]}>
				<serviceItemContext.Provider
					value={[activeService, setActiveService]}>
					<businessItemContext.Provider
						value={[activeBusiness, setActiveBusiness]}>
						<modalDisplayContext.Provider
							value={[modalDisplay, setModalDisplay]}>
							<Modal
								showLogin={showLogin}
								showRegister={showRegister}
								setShowLogin={setShowLogin}
								setShowRegister={setShowRegister}
								setCategory={setCategory}
								setCity={setCity}
								city={city}
							/>
							<Routes>
								<Route
									path="/"
									element={
										<HomeView
											setCategory={setCategory}
											setCity={setCity}
											city={city}
											setShowLogin={setShowLogin}
											setShowRegister={setShowRegister}
										/>
									}
								/>

								<Route
									path={`/product/${activeBusiness.id}`}
									element={
										<ProductView
											servicesList={servicesList}
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

								{currentUser && (
									<Route
										path="/profile"
										element={<ProfileView />}
									/>
								)}
							</Routes>
						</modalDisplayContext.Provider>
					</businessItemContext.Provider>
				</serviceItemContext.Provider>
			</currentUserContext.Provider>
		</businessListContext.Provider>
	);
}

export default App;
