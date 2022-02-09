import { useState, useEffect } from "react";
import ProductView from "../../views/ProductView";

//do product view
//wzorowanie na service
//do App

const getRating = ({ business, getRating }) => {
	return (
		<>
			{getRating?.map((bus) => (
				<div key={bus.businessId}>
					{bus.businessId === business.id
						? bus.rating.map((rating) => (
								<ProductView rating={rating} />
						  ))
						: null}
				</div>
			))}
		</>
	);
};

export default getRating;
