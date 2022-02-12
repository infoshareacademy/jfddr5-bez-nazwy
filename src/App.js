import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useState, useEffect, useMemo } from "react";
import { auth, getBusinessList, getRating, getServicesList } from "./utils/db";
import { businessListContext } from "./contexts/BusinessListContext";
import { currentUserContext } from "./contexts/CurrentUserContext";
import "./App.css";
import CategoryView from "./views/CategoryView";
import Modal from "./components/Modal/Modal";
import { modalDisplayContext } from "./contexts/ModalDisplayContext";
import { serviceItemContext } from "./contexts/ServiceItemContext";
import { businessItemContext } from "./contexts/BusinessItemContext";
import { ratingContext } from "./contexts/RatingContext";

function App() {
	//USE STATES
	//context states
	const [currentUser, setCurrentUser] = useState(null);
	const [businessList, setBusinessList] = useState([]);
	const [activeBusiness, setActiveBusiness] = useState("");
	//service list state
	//todo: assign to context!!!!
	const [servicesList, setServicesList] = useState([]);
	const [activeService, setActiveService] = useState("");
	const [ratingList, setRatingList] = useState([]);
	const [modalDisplay, setModalDisplay] = useState("");
	//category & city states
	const [category, setCategory] = useState("");
	const [city, setCity] = useState("");
	//modal form state
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);
	const [usersReservations, setUsersReservations] = useState([]);

	//USE EFFECTS - FETCHING DATA
	useEffect(() => {
		return auth.onAuthStateChanged(setCurrentUser);
	}, []);

	useEffect(() => {
		getBusinessList(setBusinessList);
		return () => setBusinessList([]);
	}, []);

	useEffect(() => {
		businessList.forEach((bus) => {
			getServicesList(setServicesList, bus.id);
			getRating(setRatingList, bus.id);
		});

		return () => {
			return setServicesList([]), setRatingList([]);
		};
	}, [businessList]);

	useEffect(() => {
		// console.log(servicesList);
	}, [category]);

	const businessListContextValue = useMemo(
		() => [businessList, setBusinessList],
		[businessList],
	);
	const currentUserContextValue = useMemo(
		() => [currentUser, setCurrentUser],
		[currentUser],
	);
	const serviceItemContextValue = useMemo(
		() => [activeService, setActiveService],
		[activeService],
	);
	const businessItemContextValue = useMemo(
		() => [activeBusiness, setActiveBusiness],
		[activeBusiness],
	);
	const modalDisplayContextValue = useMemo(
		() => [modalDisplay, setModalDisplay],
		[modalDisplay],
	);

	const ratingContextValue = useMemo(
		() => [ratingList, setRatingList],
		[ratingList],
	);
	console.log(modalDisplay);
	return (
		<businessListContext.Provider value={businessListContextValue}>
			<currentUserContext.Provider value={currentUserContextValue}>
				<serviceItemContext.Provider value={serviceItemContextValue}>
					<businessItemContext.Provider
						value={businessItemContextValue}>
						<modalDisplayContext.Provider
							value={modalDisplayContextValue}>
							<ratingContext.Provider value={ratingContextValue}>
								<Modal
									showLogin={showLogin}
									showRegister={showRegister}
									setShowLogin={setShowLogin}
									setShowRegister={setShowRegister}
									setCategory={setCategory}
									setCity={setCity}
									city={city}
									usersReservations={usersReservations}
									setUsersReservations={setUsersReservations}
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
												setShowRegister={
													setShowRegister
												}
											/>
										}
									/>

									<Route
										path={`/product/${activeBusiness.id}`}
										element={
											<ProductView
												servicesList={servicesList}
												ratingList={ratingList}
												setShowLogin={setShowLogin}
												setShowRegister={
													setShowRegister
												}
												setCategory={setCategory}
												setCity={setCity}
												city={city}
											/>
										}
									/>

									<Route
										path="/s"
										element={
											<CategoryView
												setServicesList={
													setServicesList
												}
												servicesList={servicesList}
												setShowLogin={setShowLogin}
												setShowRegister={
													setShowRegister
												}
												setCategory={setCategory}
												setCity={setCity}
												city={city}
											/>
										}
									/>
									{currentUser && (
										<Route
											path="/profile"
											element={
												<ProfileView
													usersReservations={
														usersReservations
													}
													setUsersReservations={
														setUsersReservations
													}
													setShowLogin={setShowLogin}
													setShowRegister={
														setShowRegister
													}
													setCategory={setCategory}
													setCity={setCity}
													city={city}
												/>
											}
										/>
									)}
								</Routes>
							</ratingContext.Provider>
						</modalDisplayContext.Provider>
					</businessItemContext.Provider>
				</serviceItemContext.Provider>
			</currentUserContext.Provider>
		</businessListContext.Provider>
	);
}

export default App;
