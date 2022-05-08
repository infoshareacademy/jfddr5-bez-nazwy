import { Dispatch, SetStateAction } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryList from "../components/CategoryList/CategoryList";
import Footer from "../components/Footer/Footer";
import FixedNavbar from "../components/Header/FixedNavbar/FixedNavbar";
import { useBusinessListContext } from "../contexts/BusinessListContext";
import { BusinessService } from "../utils/db";
import { pathNormalize } from "../utils/pathNormalize";

interface Props {
	servicesList: BusinessService[];
	setCategory: Dispatch<SetStateAction<string>>;
	setCity: Dispatch<SetStateAction<string>>;
	setShowLogin: Dispatch<SetStateAction<boolean>>;
	setShowRegister: Dispatch<SetStateAction<boolean>>;
	city: string;
}

const CategoryView = ({
	servicesList,
	setCategory,
	setCity,
	setShowLogin,
	setShowRegister,
	city,
}: Props) => {
	const [businessList] = useBusinessListContext();
	const [searchParams] = useSearchParams();

	const cityPath = pathNormalize(searchParams.get("city") ?? "");
	const categoryPath = pathNormalize(searchParams.get("category") ?? "");

	return (
		<div>
			<FixedNavbar
				setCategory={setCategory}
				setCity={setCity}
				setShowLogin={setShowLogin}
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
							servicesList={servicesList}
						/>
					))}
			</div>
			<Footer />
		</div>
	);
};

export default CategoryView;
