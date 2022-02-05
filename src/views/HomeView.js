import { useState } from "react";
import Header from "../components/Header/Header";
import CategoryListBar from "../components/Header/CategoryListBar/CategoryListBar";

const HomeView = ({ setProduct, product, setCategory }) => {
	return (
		<div>
			<Header
				setProduct={setProduct}
				product={product}
				setCategory={setCategory}
			/>
		</div>
	);
};

export default HomeView;
