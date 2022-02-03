import CategoryListBar from "../components/Header/CategoryListBar/CategoryListBar";

const HomeView = ({ businessList }) => {
	return (
		<div>
			HomeView
			<CategoryListBar businessList={businessList} />
		</div>
	);
};

export default HomeView;
