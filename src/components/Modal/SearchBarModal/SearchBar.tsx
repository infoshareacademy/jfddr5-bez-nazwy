import {
	Dispatch,
	FormEvent,
	MutableRefObject,
	Ref,
	RefObject,
	SetStateAction,
	useContext,
	useRef,
	useState,
} from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useBusinessListContext } from "../../../contexts/BusinessListContext";
import { SearchBarList } from "./SearchBarList";
import styles from "./SearchBar.module.css";
import { pathNormalize } from "../../../utils/pathNormalize";
import { useModalDisplayContext } from "../../../contexts/ModalDisplayContext";
import { useBusinessItemContext } from "../../../contexts/BusinessItemContext";
import { autocompleteHelper } from "../../../utils/autocompleteHelper";
import { Business } from "../../../utils/db";

interface Props {
	setCategory: Dispatch<SetStateAction<string>>;
	setCity: Dispatch<SetStateAction<string>>;
	city: string;
}

export const SearchBar = ({ setCategory, setCity, city }: Props) => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [cityValue, setCityValue] = useState<string>(city);
	const [businessList] = useBusinessListContext();
	const [, setDisplayModal] = useModalDisplayContext();
	const [, setActiveBusiness] = useBusinessItemContext();

	const navigate = useNavigate();

	type Value = RefObject<HTMLInputElement> | null;
	const searchInputRef = useRef<HTMLInputElement | null>(null);
	const cityInputRef = useRef<HTMLInputElement | null>(null);

	//Lists of business names, categories, cities
	const nameList = businessList.map((business) => business.name);

	const categoryList = Array.from(
		new Set(businessList.map((business) => business.category)),
	);

	const cityList = Array.from(
		new Set(businessList.map((business) => business.city)),
	);

	//submit button handler
	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		//name
		if (businessList.some((business) => searchValue === business.name)) {
			//find business object

			const businessObj = businessList.find(
				(business) => searchValue === business.name,
			);
			if (businessObj !== undefined) {
				//set active business to this object
				setActiveBusiness(businessObj);
				//navigate to the site
				navigate(`/product/${businessObj.id}`);
				//close modal
				setDisplayModal("");
			}
		}
		//category & city
		else if (
			categoryList.some((category) => searchValue === category) ||
			cityList.some((city) => cityValue === city)
		) {
			//clear category
			setCategory("");
			//find category and city
			const category =
				categoryList.find((category) => searchValue === category) ?? "";
			const city = cityList.find((city) => cityValue === city) ?? "";
			//normalize paths
			const categoryPath = pathNormalize(searchValue ?? "");
			const cityPath = pathNormalize(cityValue ?? "");
			//set city and category
			setCity(city);
			setCategory(category);

			//navigate both
			(category &&
				city &&
				navigate({
					pathname: "/s",
					search: `?${createSearchParams({
						city: cityPath,
						category: categoryPath,
					})}`,
				})) ||
				//navigate category - city is not set
				(!city &&
					navigate({
						pathname: "/s",
						search: `?${createSearchParams({
							category: categoryPath,
						})}`,
					})) ||
				//navigate city - category is not set
				(!category &&
					navigate({
						pathname: "/s",
						search: `?${createSearchParams({
							city: cityPath,
						})}`,
					}));
			//close modal
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
					{(document.activeElement === searchInputRef?.current ||
						cityInputRef?.current) && (
						<div>
							{autocompleteHelper(
								searchInputRef,
								nameList,
								3,
							) && (
								<SearchBarList
									autocompleteList={nameList}
									header="Salony"
									inputRef={searchInputRef}
									setValue={setSearchValue}
								/>
							)}

							{autocompleteHelper(
								searchInputRef,
								categoryList,
								3,
							) && (
								<SearchBarList
									autocompleteList={categoryList}
									header="Usługi"
									inputRef={searchInputRef}
									setValue={setSearchValue}
								/>
							)}

							{autocompleteHelper(cityInputRef, cityList, 1) && (
								<SearchBarList
									autocompleteList={cityList}
									header="Miasta"
									inputRef={cityInputRef}
									setValue={setCityValue}
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
