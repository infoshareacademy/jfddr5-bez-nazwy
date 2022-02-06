export const BusinessListItem = ({ business }) => {
	return (
		<div>
			{business.name}, {business.city}, {business.category}
		</div>
	);
};
