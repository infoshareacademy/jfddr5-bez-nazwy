export const SearchBarList = ({
	header,
	businessList,
	setValue,
	inputRef,
	categoryList,
}) => {
	console.log(categoryList);

	return (
		<div>
			<h3>{header}</h3>
			<ul>
				{header === "Salony" &&
					businessList.map((bus) => {
						console.log(bus.name);
						if (bus.name.includes(inputRef.current.value)) {
							return <li>{bus.name}</li>;
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
