import { useState } from "react";
import Header from "../components/Header/Header";

const HomeView = (props) => {
	const [searchType, setSearchType] = useState(null);

	return (
		<div>
			<Header
				setProductId={props.setProductId}
				productId={props.productId}
				businessList={props.businessList}
				setBusinessList={props.setBusinessList}
				searchType={searchType}
				handleSearchType={setSearchType}
			/>
		</div>
	);
};

export default HomeView;
