import { useContext } from "react";
import { businessListContext } from "../../contexts/BusinessListContext";

export const SearchBarList = ({
	header,
	setSearchValue,
	inputRef,
	categoryList,
}) => {
	console.log(categoryList);
	const businessList = useContext(businessListContext);

	return (
		<div>
			<h3>{header}</h3>
			<ul>
				{header === "Salony" &&
					businessList.map((bus) => {
						const myName = bus.name.toLowerCase();
						const myValue = inputRef.current.value.toLowerCase();

						console.log(myName, myValue, myName.includes(myValue));
						if (myName.includes(myValue)) {
							return (
								<li onClick={() => setSearchValue(bus.name)}>
									{bus.name}
								</li>
							);
						}
						return;
					})}
				{header === "Usługi" &&
					categoryList.map((category) => {
						console.log(category);
						if (
							category
								.toLowerCase()
								.includes(inputRef.current.value.toLowerCase())
						) {
							return (
								<li onClick={() => setSearchValue(category)}>
									{category}
								</li>
							);
						}
						return;
					})}
			</ul>
		</div>
	);
};
