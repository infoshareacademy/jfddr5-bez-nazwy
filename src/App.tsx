import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useState, useEffect, useMemo, SetStateAction, Dispatch } from "react";
import {
	auth,
	Business,
	BusinessRating,
	BusinessService,
	getBusinessList,
	getRating,
	getServicesList,
	getUsers,
	Service,
	User,
	UsersReservationsPerDay,
} from "./utils/db";
import { businessListContext } from "./contexts/BusinessListContext";
import { currentUserContext } from "./contexts/CurrentUserContext";
import "./App.css";
import CategoryView from "./views/CategoryView";
import Modal from "./components/Modal/Modal";
import { modalDisplayContext } from "./contexts/ModalDisplayContext";
import { serviceItemContext } from "./contexts/ServiceItemContext";
import { businessItemContext } from "./contexts/BusinessItemContext";
import { ratingContext } from "./contexts/RatingContext";
import { usersListContext } from "./contexts/usersListContext";
import ScrollToTop from "./utils/ScrollToTop";

export interface CurrentUser {
	email: string | null;
	uid: string;
}

function App() {
	//USE STATES
	//context states
	const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
	const [usersList, setUsersList] = useState<User[]>([]);
	const [businessList, setBusinessList] = useState<Business[]>([]);
	const [activeBusiness, setActiveBusiness] = useState<Business | null>(null);
	//service list state
	const [servicesList, setServicesList] = useState<BusinessService[]>([]);
	const [activeService, setActiveService] = useState<Service | null>(null);
	const [ratingList, setRatingList] = useState<BusinessRating[]>([]);
	const [modalDisplay, setModalDisplay] = useState<string>("");
	//category & city states
	const [category, setCategory] = useState<string>("");
	const [city, setCity] = useState<string>("");
	//modal form state
	const [showLogin, setShowLogin] = useState<boolean>(false);
	const [showRegister, setShowRegister] = useState<boolean>(false);
	const [usersReservations, setUsersReservations] = useState<
		UsersReservationsPerDay[]
	>([]);

	//USE EFFECTS - FETCHING DATA
	useEffect(() => {
		return auth.onAuthStateChanged(setCurrentUser);
	}, []);

	useEffect(() => {
		getBusinessList(setBusinessList);
		getUsers(setUsersList);
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

	type Value1<T> = [T | null, Dispatch<SetStateAction<T | null>>];
	type Value2<T> = [T, Dispatch<SetStateAction<T>>];

	const businessListContextValue = useMemo<Value2<Business[]> | null>(
		() => [businessList, setBusinessList],
		[businessList],
	);
	const currentUserContextValue = useMemo<Value1<CurrentUser> | null>(
		() => [currentUser, setCurrentUser],
		[currentUser],
	);
	const serviceItemContextValue = useMemo<Value1<Service> | null>(
		() => [activeService, setActiveService],
		[activeService],
	);
	const businessItemContextValue = useMemo<Value1<Business | null>>(
		() => [activeBusiness, setActiveBusiness],
		[activeBusiness],
	);
	const modalDisplayContextValue = useMemo<Value2<string>>(
		() => [modalDisplay, setModalDisplay],
		[modalDisplay],
	);

	const ratingContextValue = useMemo<Value2<BusinessRating[]>>(
		() => [ratingList, setRatingList],
		[ratingList],
	);

	const usersListContextValue = useMemo<Value2<User[]>>(
		() => [usersList, setUsersList],
		[usersList],
	);

	return (
		<businessListContext.Provider value={businessListContextValue}>
			<currentUserContext.Provider value={currentUserContextValue}>
				<serviceItemContext.Provider value={serviceItemContextValue}>
					<businessItemContext.Provider
						value={businessItemContextValue}>
						<modalDisplayContext.Provider
							value={modalDisplayContextValue}>
							<ratingContext.Provider value={ratingContextValue}>
								<usersListContext.Provider
									value={usersListContextValue}>
									<Modal
										showLogin={showLogin}
										showRegister={showRegister}
										setShowLogin={setShowLogin}
										setShowRegister={setShowRegister}
										setCategory={setCategory}
										setCity={setCity}
										city={city}
										usersReservations={usersReservations}
										setUsersReservations={
											setUsersReservations
										}
									/>
									<ScrollToTop>
										<Routes>
											<Route
												path="/"
												element={
													<HomeView
														category={category}
														setCategory={
															setCategory
														}
														setCity={setCity}
														city={city}
														setShowLogin={
															setShowLogin
														}
														setShowRegister={
															setShowRegister
														}
													/>
												}
											/>

											<Route
												path={`/product/${activeBusiness?.id}`}
												element={
													<ProductView
														servicesList={
															servicesList
														}
														ratingList={ratingList}
														setShowLogin={
															setShowLogin
														}
														setShowRegister={
															setShowRegister
														}
														setCategory={
															setCategory
														}
														setCity={setCity}
														city={city}
													/>
												}
											/>

											<Route
												path="/s"
												element={
													<CategoryView
														servicesList={
															servicesList
														}
														setShowLogin={
															setShowLogin
														}
														setShowRegister={
															setShowRegister
														}
														setCategory={
															setCategory
														}
														setCity={setCity}
														city={city}
													/>
												}
											/>
											{currentUser !== null && (
												<Route
													path="/profile"
													element={
														<ProfileView
															setShowLogin={
																setShowLogin
															}
															setShowRegister={
																setShowRegister
															}
															setCategory={
																setCategory
															}
															setCity={setCity}
															city={city}
														/>
													}
												/>
											)}
										</Routes>
									</ScrollToTop>
								</usersListContext.Provider>
							</ratingContext.Provider>
						</modalDisplayContext.Provider>
					</businessItemContext.Provider>
				</serviceItemContext.Provider>
			</currentUserContext.Provider>
		</businessListContext.Provider>
	);
}

export default App;
