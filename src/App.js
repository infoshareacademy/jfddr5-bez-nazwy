import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import { useEffect, useState } from "react";
import { getBusinessList } from "./utils/db";
import FilterByCity from "./utils/FilterByCity";


function App() {
const [businessList, setBusinessList] = useState ([])
useEffect (() => {
 getBusinessList (setBusinessList)

},[])
//tymczasowe zmiany do przekopiowania
  return (
<div>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/category" element={<CategoryView />} />
      <Route path="/product" element={<ProductView />} />
      <Route path="/profile" element={<ProfileView />} />
    </Routes>
    <FilterByCity businessList ={businessList} setBusinessList = {setBusinessList} />
  </div>
  );
}

export default App;




