import { useState } from "react";
import Header from "../components/Header/Header";

const HomeView = ({ setProduct, product, setCategory, currentUser }) => {
	const [searchType, setSearchType] = useState(null);

	return (
		<div>
			<Header
				setProduct={setProduct}
				product={product}
				searchType={searchType}
				handleSearchType={setSearchType}
				setCategory={setCategory}
				currentUser={currentUser}
			/>
		</div>
	);
};

export default HomeView;
