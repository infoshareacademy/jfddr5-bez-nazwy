export const formatDate = (date) => {
	return date.toLocaleString("pl-PL").split(",")[0].padStart(10, "0");
};
