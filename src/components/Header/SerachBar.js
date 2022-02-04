import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBarList } from "./SearchBarList";

export const SearchBar = ({ searchType, businessList, setProductId }) => {
	const [value, setValue] = useState("");
	const navigate = useNavigate();
	const inputRef = useRef();

	const categoryList = Array.from(
		new Set(businessList.map((business) => business.category)),
	);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (businessList.some((bus) => value === bus.name)) {
			const businessObj = businessList.find((bus) => value == bus.name);
			console.log(businessObj.id);
			setProductId(businessObj.id);
			navigate(`/product/${businessObj.id}`);
		} else if (businessList.some((bus) => value === bus.category)) {
			//todo Emilia
			navigate(`/category`);
		}
		//city

		//both
	};

	const handleChange = (e) => {
		setValue(e.target.value);
		console.log(e.target.value);
		console.log(inputRef.current.value);
	};
	return (
		//searchtype service
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
				businessList.some((business) =>
					business.name.includes(inputRef.current.value),
				) && (
					<SearchBarList
						categoryList={categoryList}
						businessList={businessList}
						header="Salony"
						inputRef={inputRef}
						setValue={setValue}
					/>
				)}

			{inputRef.current &&
				inputRef.current.value.length >= 3 &&
				categoryList.some((category) =>
					category.includes(inputRef.current.value),
				) && (
					<SearchBarList
						categoryList={categoryList}
						businessList={businessList}
						header="Usługi"
						inputRef={inputRef}
						setValue={setValue}
					/>
				)}
		</div>
	);
};
