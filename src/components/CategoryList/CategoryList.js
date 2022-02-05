const CategoryList = ({ business, servicesList }) => {
	return (
		<div key={business.id}>
			<div>
				<h1>{business.name} </h1>
				<h3>{business.city}</h3>
			</div>
			<div>
				{servicesList.map((service) => {
					if (service.id === business.id) {
						return (
							<div key={servicesList.id}>
								{service.servicesList.map((service) => (
									<p key={servicesList.id}>
										{service.name} {service.price}
									</p>
								))}
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

export default CategoryList;
