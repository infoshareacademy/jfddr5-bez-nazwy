import { useContext } from "react";
import { BusinessListItem } from "../components/CategoryList/BusinessListItem";
import { businessListContext } from "../contexts/BusinessListContext";

const CategoryView = ({ city, category }) => {
	const businessList = useContext(businessListContext);
	return (
		<div>
			{businessList.map((business) => {
				if (business.category === category && !city) {
					return (
						<BusinessListItem
							key={business.id}
							business={business}
						/>
					);
				}
				if (business.city === city && !category) {
					return (
						<BusinessListItem
							key={business.id}
							business={business}
						/>
					);
				}
				if (business.city === city && business.category === category) {
					return (
						<BusinessListItem
							key={business.id}
							business={business}
						/>
					);
				}
			})}
		</div>
	);
};

export default CategoryView;
