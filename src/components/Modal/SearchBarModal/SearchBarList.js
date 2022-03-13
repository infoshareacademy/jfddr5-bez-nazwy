import styles from "./SearchBar.module.css";

export const SearchBarList = ({
	header,
	setValue,
	inputRef,
	autocompleteList,
}) => {
	return (
		<div>
			<h3 className={styles.listHeader}>{header}</h3>
			<ul>
				{autocompleteList
					.filter((item) =>
						item
							.toLowerCase()
							.includes(inputRef.current.value.toLowerCase()),
					)
					.map((item) => (
						<li
							className={styles.listItem}
							key={item}
							onClick={() => setValue(item)}>
							{item}
						</li>
					))}
			</ul>
		</div>
	);
};
