import { Dispatch, MutableRefObject, SetStateAction } from "react";
import styles from "./SearchBar.module.css";

interface Props {
	header: string;
	setValue: Dispatch<SetStateAction<string>>;
	inputRef: MutableRefObject<null | HTMLInputElement>;
	autocompleteList: string[];
}

export const SearchBarList = ({
	header,
	setValue,
	inputRef,
	autocompleteList,
}: Props) => {
	return (
		<div>
			<h3 className={styles.listHeader}>{header}</h3>
			<ul>
				{autocompleteList
					.filter((item) =>
						item
							.toLowerCase()
							.includes(
								inputRef.current !== null
									? inputRef.current.value.toLowerCase()
									: "",
							),
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
