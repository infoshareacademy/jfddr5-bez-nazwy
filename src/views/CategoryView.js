import { useContext } from "react";
import CategoryList from "../components/CategoryList/CategoryList";
import { businessListContext } from "../contexts/BusinessListContext";

const CategoryView = ({ city, category, setServicesList, servicesList }) => {
	const [businessList, setBusinessList] = useContext(businessListContext);
	return (
		<div>
			{businessList.map((business) => {
				if (business.category === category && !city) {
					return (
						<CategoryList
							key={business.id}
							business={business}
							setServicesList={setServicesList}
							servicesList={servicesList}
						/>
					);
				}
				if (business.city === city && !category) {
					return (
						<CategoryList
							key={business.id}
							business={business}
							setServicesList={setServicesList}
							servicesList={servicesList}
						/>
					);
				}
				if (business.city === city && business.category === category) {
					return (
						<CategoryList
							key={business.id}
							business={business}
							setServicesList={setServicesList}
							servicesList={servicesList}
						/>
					);
				}
			})}
		</div>
	);
};

export default CategoryView;
