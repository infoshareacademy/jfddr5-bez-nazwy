import { useState } from "react";
import Header from "../components/Header/Header";
import CategoryListBar from "../components/Header/CategoryListBar/CategoryListBar";

const HomeView = ({ setProduct, product, setCategory }) => {
	const [searchType, setSearchType] = useState(null);

	return (
		<div>
			<Header
				setProduct={setProduct}
				product={product}
				searchType={searchType}
				handleSearchType={setSearchType}
				setCategory={setCategory}
			/>
		</div>
	);
};

export default HomeView;
