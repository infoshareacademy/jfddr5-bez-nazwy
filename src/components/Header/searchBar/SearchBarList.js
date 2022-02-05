import { useContext } from "react";
import { businessListContext } from "../../../contexts/BusinessListContext";

export const SearchBarList = ({
	header,
	setSearchValue,
	setCityValue,
	searchInputRef,
	cityInputRef,
	categoryList,
	cityList,
}) => {
	const businessList = useContext(businessListContext);

	return (
		<div>
			<h3>{header}</h3>
			<ul>
				{header === "Salony" &&
					businessList.map((business) => {
						const myName = business.name.toLowerCase();
						const myValue =
							searchInputRef.current.value.toLowerCase();

						if (myName.includes(myValue)) {
							return (
								<li
									key={business.id}
									onClick={() =>
										setSearchValue(business.name)
									}>
									{business.name}
								</li>
							);
						}
						return;
					})}
				{header === "Usługi" &&
					categoryList.map((category) => {
						if (
							category
								.toLowerCase()
								.includes(
									searchInputRef.current.value.toLowerCase(),
								)
						) {
							return (
								<li
									key={category}
									onClick={() => setSearchValue(category)}>
									{category}
								</li>
							);
						}
						return;
					})}
				{header === "Miasta" &&
					cityList.map((city) => {
						if (
							city
								.toLowerCase()
								.includes(
									cityInputRef.current.value.toLowerCase(),
								)
						) {
							return (
								<li
									key={city}
									onClick={() => setCityValue(city)}>
									{city}
								</li>
							);
						}
						return;
					})}
			</ul>
		</div>
	);
};
