import { useEffect, useState } from "react";
import { businessListContext } from "../../contexts/BusinessListContext";
import { getServicesList } from "../../utils/db";

const CategoryList = ({
	business,
	setServicesList,
	servicesList,
	category,
}) => {
	useEffect(() => {
		getServicesList(setServicesList, business.id);
		return setServicesList([]);
	}, [category]);
	console.log(servicesList);

	return (
		<div>
			<div>
				<h1>{business.name} </h1>
				<h3>{business.city}</h3>
			</div>
			<div>
				{servicesList.length === 0 &&
					servicesList?.map((bus) => {
						if (bus.businessId === business.id) {
							bus.services.map((service) => {
								return (
									<p key={service.id}>
										{service.name}, {service.price},{" "}
										{service.slot}
									</p>
								);
							});
						}
					})}
			</div>
		</div>
	);
};

export default CategoryList;
