import { useState } from "react";
import Header from "../components/Header/Header";

const HomeView = ({ setProduct, product, setCategory, setCity }) => {
	return (
		<div>
			<Header
				setProduct={setProduct}
				product={product}
				setCategory={setCategory}
				setCity={setCity}
			/>
		</div>
	);
};

export default HomeView;
