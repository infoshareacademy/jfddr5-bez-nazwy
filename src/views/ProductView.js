import ServicesList from "../components/CategoryList/ServicesList";
const ProductView = ({ product, setServicesList, servicesList, business }) => {
	return (
		<div>
			<h3>
				ProductView: {product.name}, {product.city}
			</h3>
			<ServicesList
				servicesList={servicesList}
				setServicesList={setServicesList}
				business={product}
				key={product.id}
			/>
		</div>
	);
};

export default ProductView;
