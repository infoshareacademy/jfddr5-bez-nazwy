export const autocompleteHelper = (ref, array, length) => {
	return (
		document.activeElement === ref.current &&
		ref.current.value.length >= length &&
		array.some((item) =>
			item.toLowerCase().includes(ref.current.value.toLowerCase()),
		)
	);
};
