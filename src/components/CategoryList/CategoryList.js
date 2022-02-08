//HEAD
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { getBusinessList, getBusinessList } from "../../utils/db"





const CategoryList = ({buissness}) => {
  return <div>{buissness.name}</div>;
}
const CategoryList = ({ name }) => {
	return <div>{name}</div>;

};
const getBusinessList = getBusinessList;


function ItemsListed(props) {
  const getBusinessList = props.getBusinessList;
  const listItem = getBusinessList.map((getBusinessList) =>
  <ListItem key={getBusinessList.toString()}/>
  );
  return[(<ul>
  <li>{listItem.id}</li>;
  <li>{listItem.category}</li>;
  <li>{listItem.contact.address}</li>;
  </ul>)];
  };

  ItemsListed()

  Firebase.firestore().collection("/business/`Item.id/`service").get()

  

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
    
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
  

export default CategoryList;
