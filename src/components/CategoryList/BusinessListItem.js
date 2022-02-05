export const BusinessListItem = ({ business }) => {
	console.log(business.id);

	return (
		<div>
			{business.name}, {business.city}, {business.category}
		</div>
	);
};
