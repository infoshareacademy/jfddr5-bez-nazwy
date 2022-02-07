<<<<<<< HEAD
import CategoryList from "../components/CategoryList/CategoryList";
const HomeView = () => {
  return <div><CategoryList></CategoryList></div>;
=======
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
>>>>>>> 707b3882d5fded4e8ef458b0e7a36d0714df4ae5
};

export default HomeView;
