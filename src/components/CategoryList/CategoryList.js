import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import {getBusinessList} from "../../utils/db"

const CategoryList = () => {
  return <div></div>;
};

function ListItem(props) {
  return <li>{props.value}</li>;
}
function ItemsListed(props) {
  const getBusinessList = props.getBusinessList;
  const listItem = getBusinessList.map((getBusinessList) =>
  <ListItem key={getBusinessList.toString()}/>
  );
  return(<ul>
  <li>{listItem.id}</li>;
  <li>{listItem.category}</li>;
  <li>{listItem.contact.address}</li>;
  </ul>);
  };


  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
    
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
  

export default CategoryList;
