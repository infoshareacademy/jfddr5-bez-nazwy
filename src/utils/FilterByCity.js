import CategoryList from "../components/CategoryList/CategoryList"

const FilterByCity = ({ businessList, setBusinessLis }) => {
	const cityList = Array.from(
		new Set(businessList.map((business) => business.city)),
	);
	const cityS = "Gdańsk";
	

	return (
		<div>
			{businessList.map((business) => {
				if (business.city === cityS) {
                    return <CategoryList key= {business.id} city= {business.city} name={business.name} />
				}
               
			})}
		</div>
	);
};

export default FilterByCity;
