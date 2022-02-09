import s from "./CategoryList.module.css";
import ServicesList from "./ServicesList";

const CategoryList = ({
	business,
	setServicesList,
	servicesList,
	category,
}) => {
	return (
		<div>
			<div>
				<h1>{business.name} </h1>
				<h3>{business.city}</h3>
			</div>
			<div className={s.panel}>
				<div>
					<img src={business.photo} width="350"></img>
				</div>
				<div className={s.panelServices}>
					<ServicesList
						setServicesList={setServicesList}
						servicesList={servicesList}
						business={business}
					/>
				</div>
			</div>
			<hr />
		</div>
	);
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
