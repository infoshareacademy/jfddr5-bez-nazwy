import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryList from "../components/CategoryList/CategoryList";
import Footer from "../components/Footer/Footer";
import FixedNavbar from "../components/Header/FixedNavbar/FixedNavbar";
import { businessListContext } from "../contexts/BusinessListContext";
import { pathNormalize } from "../utils/pathNormalize";

const CategoryView = ({
	setServicesList,
	servicesList,
	currentUser,
	product,
	setProduct,
	setCategory,
	setCity,
	showLogin,
	setShowLogin,
	showRegister,
	setShowRegister,
}) => {
	const [businessList] = useContext(businessListContext);
	const [searchParams] = useSearchParams();

	const city = pathNormalize(searchParams.get("city") ?? "");
	const category = pathNormalize(searchParams.get("category") ?? "");

	return (
		<div>
			<FixedNavbar
				setProduct={setProduct}
				product={product}
				setCategory={setCategory}
				setCity={setCity}
				city={city}
				currentUser={currentUser}
				showLogin={showLogin}
				setShowLogin={setShowLogin}
				showRegister={showRegister}
				setShowRegister={setShowRegister}
			/>
			<div>
				{businessList
					.filter(
						(business) =>
							(pathNormalize(business.category) === category &&
								!city) ||
							(pathNormalize(business.city) === city &&
								!category) ||
							(pathNormalize(business.city) === city &&
								pathNormalize(business.category) === category),
					)
					.map((business) => (
						<CategoryList
							key={business.id}
							business={business}
							setServicesList={setServicesList}
							servicesList={servicesList}
						/>
					))}
			</div>
			<Footer />
		</div>
	);
};

export default CategoryView;
