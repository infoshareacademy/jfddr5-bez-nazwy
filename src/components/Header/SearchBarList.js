import { useContext } from "react";
import { businessListContext } from "../../contexts/BusinessListContext";

export const SearchBarList = ({ header, setValue, inputRef, categoryList }) => {
	console.log(categoryList);
	const businessList = useContext(businessListContext);

	return (
		<div>
			<h3>{header}</h3>
			<ul>
				{header === "Salony" &&
					businessList.map((bus) => {
						console.log(bus.name);
						if (bus.name.includes(inputRef.current.value)) {
							return (
								<li onClick={() => setValue(bus.name)}>
									{bus.name}
								</li>
							);
						}
						return;
					})}
				{header === "Usługi" &&
					categoryList.map((category) => {
						console.log(category);
						if (category.includes(inputRef.current.value)) {
							return <li>{category}</li>;
						}
						return;
					})}
			</ul>
		</div>
	);
};
