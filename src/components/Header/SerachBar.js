import { useReducer, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const SearchBar = ({
	searchType,
	businessList,
	productId,
	setProductId,
}) => {
	const [value, setValue] = useState("");
	const navigate = useNavigate();
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const businessObj = businessList.find((bus) => value === bus.name);
		console.log(businessObj.id);
		setProductId(businessObj.id);
		navigate(`/product/${businessObj.id}`);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
		console.log(e.target.value);
		console.log(inputRef.current.value);
		// const listsFilter = businessList.filter((bus) => {
		// 	if (
		// 		bus.name.includes(e.target.value) &&
		// 		e.target.value.length >= 3
		// 	) {
		// 		return bus.name;
		// 	}
		// 	return;
		// });
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
					onChange={handleChange}
					ref={inputRef}></input>
				<button type="submit">Szukaj</button>
			</form>
			{inputRef.current &&
				inputRef.current.value.length >= 3 &&
				businessList.map((bus) => {
					if (bus.name.includes(inputRef.current.value)) {
						return (
							<p key={bus.id} onClick={() => setValue(bus.name)}>
								{bus.name}
							</p>
						);
					}
					return;
				})}
		</div>
	);
};
