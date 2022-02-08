import { useState } from "react";
import Calendar from "react-calendar";

import s from "./CategoryList.module.css";

const Service = ({ service }) => {
	const [displayCalendar, setDisplayCalendar] = useState(false);

	const handleClickDay = (value, event) => {
		console.log(value);
		console.log(event);
		console.log(service.slot);
	};

	return (
		<>
			<div key={service.id} className={s.servicesList}>
				<div className={s.servicesListName}>{service.name}</div>
				<div className={s.servicesListPrice}>{service.price}zł</div>
				<div className={s.servicesListPrice}>{service.slot}</div>
				<button
					className={s.servicesButton}
					onClick={(id) => setDisplayCalendar(!displayCalendar)}>
					Zarezerwuj
				</button>
				{displayCalendar && (
					<div>
						<Calendar onClickDay={handleClickDay} />
					</div>
				)}
			</div>
		</>
	);
};

export default Service;
