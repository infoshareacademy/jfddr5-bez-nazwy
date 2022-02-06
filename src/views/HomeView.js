import { useState } from "react";
import Header from "../components/Header/Header";

const HomeView = ({ setProduct, product, setCategory, setCity, city }) => {
	return (
		<div>
			<Header
				setProduct={setProduct}
				product={product}
				setCategory={setCategory}
				setCity={setCity}
				city={city}
			/>
		</div>
	);
};

export default HomeView;
