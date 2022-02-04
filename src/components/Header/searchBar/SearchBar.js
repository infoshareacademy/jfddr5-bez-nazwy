import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { businessListContext } from "../../../contexts/BusinessListContext";
import { SearchBarList } from "./SearchBarList";

export const SearchBar = ({ searchType, setProduct, setCategory }) => {
	const [searchValue, setSearchValue] = useState("");
	const [cityValue, setCityValue] = useState("");
	const navigate = useNavigate();

	const searchInputRef = useRef();
	const cityInputRef = useRef();
	const businessList = useContext(businessListContext);

	const categoryList = Array.from(
		new Set(businessList.map((business) => business.category)),
	);

	const cityList = Array.from(
		new Set(businessList.map((business) => business.city)),
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		//name
		if (businessList.some((business) => searchValue === business.name)) {
			const businessObj = businessList.find(
				(business) => searchValue === business.name,
			);
			setProduct(businessObj);
			navigate(`/product/${businessObj.id}`);
			//category
		} else if (categoryList.some((category) => searchValue === category)) {
			const category = categoryList.find(
				(category) => searchValue === category,
			);
			setCategory(category);
			navigate(`/${category}`);
		}
		//city
		else if (cityList.some((city) => cityValue === city)) {
			const city = cityList.find((city) => cityValue === city);

			navigate(`/${city}`);
		}
		//both
	};

	return (
		//searchtype service
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Czego szukasz?"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					ref={searchInputRef}></input>
				<input
					type="text"
					placeholder="Gdzie jesteś?"
					value={cityValue}
					onChange={(e) => setCityValue(e.target.value)}
					ref={cityInputRef}></input>
				<button type="submit">Szukaj</button>
			</form>

			{(document.activeElement === searchInputRef.current ||
				cityInputRef.current) && (
				<div>
					{document.activeElement === searchInputRef.current &&
						searchInputRef.current.value.length >= 3 &&
						businessList.some((business) =>
							business.name
								.toLowerCase()
								.includes(
									searchInputRef.current.value.toLowerCase(),
								),
						) && (
							<SearchBarList
								categoryList={categoryList}
								header="Salony"
								searchInputRef={searchInputRef}
								setSearchValue={setSearchValue}
							/>
						)}

					{document.activeElement === searchInputRef.current &&
						searchInputRef.current.value.length >= 3 &&
						categoryList.some((category) =>
							category
								.toLowerCase()
								.includes(
									searchInputRef.current.value.toLowerCase(),
								),
						) && (
							<SearchBarList
								categoryList={categoryList}
								header="Usługi"
								searchInputRef={searchInputRef}
								setSearchValue={setSearchValue}
							/>
						)}

					{document.activeElement === cityInputRef.current &&
						cityInputRef.current.value.length >= 1 &&
						cityList.some((city) =>
							city
								.toLowerCase()
								.includes(
									cityInputRef.current.value.toLowerCase(),
								),
						) && (
							<SearchBarList
								cityList={cityList}
								header="Miasta"
								cityInputRef={cityInputRef}
								setCityValue={setCityValue}
							/>
						)}
				</div>
			)}
		</div>
	);
};
