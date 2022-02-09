const Rating = ({ rating }) => {
	return (
		<>
			<p>{rating.user}</p>
			<p>
				{rating.value} {rating.comment}
			</p>
		</>
	);
};

export default Rating;
