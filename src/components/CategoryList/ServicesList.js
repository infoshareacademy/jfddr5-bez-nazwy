import { useState } from "react";
import Calendar from "react-calendar";

import s from "./CategoryList.module.css";

const ServicesList = ({ business, servicesList }) => {
	const [displayCalendar, setDisplayCalendar] = useState(false);

	return (
		<>
			{servicesList?.map((bus) => (
				<div key={bus.businessId}>
					{bus.businessId === business.id
						? bus.services.map((service) => (
								<div
									key={service.id}
									className={s.servicesList}>
									<div className={s.servicesListName}>
										{service.name}
									</div>
									<div className={s.servicesListPrice}>
										{service.price}zł
									</div>
									<div className={s.servicesListPrice}>
										{service.slot}
									</div>
									<button
										className={s.servicesButton}
										onClick={(id) =>
											setDisplayCalendar(!displayCalendar)
										}>
										Zarezerwuj
									</button>
								</div>
						  ))
						: null}

					{displayCalendar && (
						<div>
							<Calendar
								onClickDay={(value, event) =>
									console.log(value)
								}
							/>
						</div>
					)}
				</div>
			))}
		</>
	);
};

export default ServicesList;
