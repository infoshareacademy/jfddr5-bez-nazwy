import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { businessListContext } from "../../../contexts/BusinessListContext";
import { SearchBarList } from "./SearchBarList";
import styles from "./SearchBar.module.css";
import { pathNormalize } from "../../../utils/pathNormalize";

export const SearchBar = ({
	displaySearchBar,
	setProduct,
	setCategory,
	onClose,
	setCity,
}) => {
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
			onClose();
			//category
		}
		if (categoryList.some((category) => searchValue === category)) {
			const category = categoryList.find(
				(category) => searchValue === category,
			);
			const categoryPath = pathNormalize(category);
			setCategory(category);
			navigate(`/${categoryPath}`);
			onClose();
		}
		//city
		if (cityList.some((city) => cityValue === city)) {
			const city = cityList.find((city) => cityValue === city);
			console.log(city);
			const cityPath = pathNormalize(city);
			console.log(city);
			setCity(() => city);
			navigate(`/${cityPath}`);
			onClose();
		}
		//both
		if (
			categoryList.some((category) => searchValue === category) &&
			cityList.some((city) => cityValue === city)
		) {
			const category = categoryList.find(
				(category) => searchValue === category,
			);
			const city = cityList.find((city) => cityValue === city);

			const categoryPath = pathNormalize(category);
			const cityPath = pathNormalize(city);
			console.log(categoryPath, cityPath);
			setCity(city);
			setCategory(category);
			navigate(`/${categoryPath}/${cityPath}`);
			onClose();
		}
	};

	if (!displaySearchBar) {
		return;
	}

	return (
		//searchtype service

		<div className={styles.searchBarModal} onClick={onClose}>
			<div
				className={styles.searchBarModalContent}
				onClick={(e) => e.stopPropagation()}>
				<form
					onSubmit={handleSubmit}
					className={styles.searchBarModalForm}>
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
								{document.activeElement ===
									searchInputRef.current &&
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

								{document.activeElement ===
									searchInputRef.current &&
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

								{document.activeElement ===
									cityInputRef.current &&
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
					<button type="submit">Szukaj</button>
				</form>
			</div>
		</div>
	);
};
