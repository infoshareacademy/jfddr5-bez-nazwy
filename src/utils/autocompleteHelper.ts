import { MutableRefObject } from "react";

export const autocompleteHelper = (
	ref: MutableRefObject<HTMLInputElement | null>,
	array: string[],
	length: number,
) => {
	if (ref.current === null) {
		return;
	}
	return (
		document.activeElement === ref.current &&
		ref.current.value.length >= length &&
		ref.current.value !== null &&
		array.some((item) =>
			item
				.toLowerCase()
				.includes(
					ref.current !== null ? ref.current.value.toLowerCase() : "",
				),
		)
	);
};
