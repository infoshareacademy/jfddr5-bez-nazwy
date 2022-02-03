import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const SearchBar = ({
	searchType,
	businessList,
	productId,
	setProductId,
}) => {
	const [value, setValue] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const businessName = businessList.find((bus) => value === bus.name);
		console.log(businessName.id);
		setProductId(businessName.id);
		navigate(`/product/${businessName.id}`);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder={
						searchType === "service" ? "Czego szukasz?" : "Miasto"
					}
					value={value}
					onChange={(e) => setValue(e.target.value)}></input>
				<button type="submit">Szukaj</button>
			</form>
		</div>
	);
};
