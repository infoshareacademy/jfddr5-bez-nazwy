export const SearchBarList = ({
	header,
	setSearchValue,
	setCityValue,
	searchInputRef,
	cityInputRef,
	nameList,
	categoryList,
	cityList,
}) => {
	const mapList = (array, value, setValue) => {
		return array.map((business) => {
			const myString = business.toLowerCase();
			const myValue = value.toLowerCase();

			if (myString.includes(myValue)) {
				return (
					<li key={business} onClick={() => setValue(business)}>
						{business}
					</li>
				);
			}
			return;
		});
	};
	return (
		<div>
			<h3>{header}</h3>
			<ul>
				{header === "Salony" &&
					mapList(
						nameList,
						searchInputRef.current.value,
						setSearchValue,
					)}
				{header === "Usługi" &&
					mapList(
						categoryList,
						searchInputRef.current.value,
						setSearchValue,
					)}

				{header === "Miasta" &&
					mapList(cityList, cityInputRef.current.value, setCityValue)}
			</ul>
		</div>
	);
};
