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
	}, []);
	console.log(servicesList);

	return (
		<div>
			<div>
				<h1>{business.name} </h1>
				<h3>{business.city}</h3>
			</div>
			<div>
				{servicesList.map((bus) => (
					<div>
						{bus.businessId === business.id
							? bus.services.map((service) => (
									<div>
										<div>{service.name}</div>
										<div>{service.price}zł</div>
										<button>Zarezerwuj</button>
									</div>
							  ))
							: null}
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryList;
