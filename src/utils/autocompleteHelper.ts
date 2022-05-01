import { MutableRefObject } from "react";

export const autocompleteHelper = (
	ref: MutableRefObject<HTMLInputElement>,
	array: string[],
	length: number,
) => {
	return (
		document.activeElement === ref.current &&
		ref.current.value.length >= length &&
		array.some((item) =>
			item.toLowerCase().includes(ref.current.value.toLowerCase()),
		)
	);
};
