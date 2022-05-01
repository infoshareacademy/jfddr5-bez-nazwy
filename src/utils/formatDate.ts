export const formatDate = (date: Date) => {
	return date.toLocaleString("pl-PL").split(",")[0].padStart(10, "0");
};
