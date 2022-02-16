import { useContext, useEffect } from "react";
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
	city,
}) => {
	const [businessList] = useContext(businessListContext);
	const [searchParams] = useSearchParams();

	const cityPath = pathNormalize(searchParams.get("city") ?? "");
	const categoryPath = pathNormalize(searchParams.get("category") ?? "");

	return (
		<div>
			<FixedNavbar
				setProduct={setProduct}
				product={product}
				setCategory={setCategory}
				setCity={setCity}
				currentUser={currentUser}
				showLogin={showLogin}
				setShowLogin={setShowLogin}
				showRegister={showRegister}
				setShowRegister={setShowRegister}
				city={city}
			/>
			<div>
				{businessList
					.filter(
						(business) =>
							(pathNormalize(business.category) ===
								categoryPath &&
								!cityPath) ||
							(pathNormalize(business.city) === cityPath &&
								!categoryPath) ||
							(pathNormalize(business.city) === cityPath &&
								pathNormalize(business.category) ===
									categoryPath),
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
