import Header from "../components/Header/Header";
import CategoryListBar from "../components/Header/CategoryListBar/CategoryListBar";

const HomeView = ({ currentUser }) => {
	return (
		<div>
			HomeView
			<Header currentUser={currentUser} />
			<CategoryListBar />
		</div>
	);
};

export default HomeView;
