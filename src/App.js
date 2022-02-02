import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/category" element={<CategoryView />} />
      <Route path="/product" element={<ProductView />} />
      <Route path="/profile" element={<ProfileView />} />
    </Routes>
  );
}

export default App;
