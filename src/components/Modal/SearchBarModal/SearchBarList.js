import styles from "./SearchBar.module.css";

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
					<li
						className={styles.listItem}
						key={business}
						onClick={() => setValue(business)}>
						{business}
					</li>
				);
			}
			return;
		});
	};
	return (
		<div>
			<h3 className={styles.listHeader}>{header}</h3>
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
