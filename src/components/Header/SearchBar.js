import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { businessListContext } from "../../contexts/BusinessListContext";
import { SearchBarList } from "./SearchBarList";

export const SearchBar = ({ searchType, setProduct, setCategory }) => {
	const [searchValue, setSearchValue] = useState("");
	const navigate = useNavigate();

	const inputRef = useRef();
	const businessList = useContext(businessListContext);

	const categoryList = Array.from(
		new Set(businessList.map((business) => business.category)),
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		//name
		if (businessList.some((business) => searchValue === business.name)) {
			const businessObj = businessList.find(
				(business) => searchValue === business.name,
			);
			console.log(businessObj);
			setProduct(businessObj);
			navigate(`/product/${businessObj.id}`);
			//category
		} else if (categoryList.some((category) => searchValue === category)) {
			const category = categoryList.find(
				(category) => searchValue == category,
			);
			console.log(category);
			setCategory(category);
			navigate(`/${category}`);
		}
		//city

		//both
	};

	const handleChange = (e) => {
		setSearchValue(e.target.value);
		console.log(e.target.value);
		console.log(inputRef.current.value);
	};
	return (
		//searchtype service
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Czego szukasz?"
					value={searchValue}
					onChange={handleChange}
					ref={inputRef}></input>
				<input type="text" placeholder="Gdzie jesteś?"></input>
				<button type="submit">Szukaj</button>
			</form>
			{inputRef.current &&
				inputRef.current.value.length >= 3 &&
				businessList.some((business) =>
					business.name
						.toLowerCase()
						.includes(inputRef.current.value.toLowerCase()),
				) && (
					<SearchBarList
						categoryList={categoryList}
						header="Salony"
						inputRef={inputRef}
						setSearchValue={setSearchValue}
					/>
				)}

			{inputRef.current &&
				inputRef.current.value.length >= 3 &&
				categoryList.some((category) =>
					category
						.toLowerCase()
						.includes(inputRef.current.value.toLowerCase()),
				) && (
					<SearchBarList
						categoryList={categoryList}
						header="Usługi"
						inputRef={inputRef}
						setSearchValue={setSearchValue}
					/>
				)}
		</div>
	);
};
