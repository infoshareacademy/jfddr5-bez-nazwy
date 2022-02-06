import CategoryList from "../components/CategoryList/CategoryList";
const ProductView = ({ product, setServicesList, servicesList, business }) => {
	return (
		<div>
			ProductView: {product.name}, {product.city}
			<CategoryList
				servicesList={servicesList}
				setServicesList={setServicesList}
				business={product}
				key={product.id}
			/>
		</div>
	);
};

export default ProductView;
