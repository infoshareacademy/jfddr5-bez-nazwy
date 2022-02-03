import { SearchBarMock } from "./SearchBarMock";

const Header = ({
	setProductId,
	productId,
	searchType,
	handleSearchType,
	businessList,
	setBusinessList,
}) => {
	return (
		<div>
			<SearchBarMock
				productId={productId}
				setProductId={setProductId}
				businessList={businessList}
				setBusinessList={setBusinessList}
				searchType={searchType}
				handleSearchType={handleSearchType}
			/>
		</div>
	);
};

export default Header;
