export const formatDate = (date: Date | string): string => {
	return date.toLocaleString("pl-PL").split(",")[0].padStart(10, "0");
};
