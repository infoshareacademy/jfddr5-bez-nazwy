import { useContext, useRef, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { businessListContext } from "../../../contexts/BusinessListContext";
import { SearchBarList } from "./SearchBarList";
import styles from "./SearchBar.module.css";
import { pathNormalize } from "../../../utils/pathNormalize";
import { modalDisplayContext } from "../../../contexts/ModalDisplayContext";
import { businessItemContext } from "../../../contexts/BusinessItemContext";

export const SearchBar = ({ setProduct, setCategory, setCity, city }) => {
	const [searchValue, setSearchValue] = useState("");
	const [cityValue, setCityValue] = useState(city);
	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
	const [activeBusiness, setActiveBusiness] = useContext(businessItemContext);

	const navigate = useNavigate();

	const searchInputRef = useRef();
	const cityInputRef = useRef();
	const [businessList] = useContext(businessListContext);

	const nameList = Array.from(
		new Set(businessList.map((business) => business.name)),
	);

	const categoryList = Array.from(
		new Set(businessList.map((business) => business.category)),
	);

	const cityList = Array.from(
		new Set(businessList.map((business) => business.city)),
	);

	const helper = (ref, array, length) => {
		return (
			document.activeElement === ref.current &&
			ref.current.value.length >= length &&
			array.some((item) =>
				item.toLowerCase().includes(ref.current.value.toLowerCase()),
			)
		);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		//name
		if (businessList.some((business) => searchValue === business.name)) {
			const businessObj = businessList.find(
				(business) => searchValue === business.name,
			);
			setActiveBusiness(businessObj);
			navigate(`/product/${businessObj.id}`);
			setDisplayModal("");
		}
		//both
		else if (
			categoryList.some((category) => searchValue === category) ||
			cityList.some((city) => cityValue === city)
		) {
			setCategory("");
			const category =
				categoryList.find((category) => searchValue === category) ?? "";
			const city = cityList.find((city) => cityValue === city) ?? "";

			const categoryPath = pathNormalize(category ?? "");
			const cityPath = pathNormalize(city ?? "");
			console.log(city, category);
			setCity(city);
			setCategory(category);
			(category &&
				city &&
				navigate({
					pathname: "/s",
					search: `?${createSearchParams({
						city: cityPath,
						category: categoryPath,
					})}`,
				})) ||
				(!city &&
					navigate({
						pathname: "/s",
						search: `?${createSearchParams({
							category: categoryPath,
						})}`,
					})) ||
				(!category &&
					navigate({
						pathname: "/s",
						search: `?${createSearchParams({
							city: cityPath,
						})}`,
					}));
			setDisplayModal("");
		}
	};

	return (
		<div
			className={styles.searchBarModalContent}
			onClick={(e) => e.stopPropagation()}>
			<form onSubmit={handleSubmit} className={styles.searchBarModalForm}>
				<div className={styles.searchBarModalInputs}>
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
				</div>
				<div className={styles.searchBarModalList}>
					{(document.activeElement === searchInputRef.current ||
						cityInputRef.current) && (
						<div>
							{helper(searchInputRef, nameList, 3) && (
								<SearchBarList
									nameList={nameList}
									header="Salony"
									searchInputRef={searchInputRef}
									setSearchValue={setSearchValue}
								/>
							)}

							{helper(searchInputRef, categoryList, 3) && (
								<SearchBarList
									categoryList={categoryList}
									header="Usługi"
									searchInputRef={searchInputRef}
									setSearchValue={setSearchValue}
								/>
							)}

							{helper(cityInputRef, cityList, 1) && (
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
				<button type="submit">Szukaj</button>
			</form>
		</div>
	);
};
