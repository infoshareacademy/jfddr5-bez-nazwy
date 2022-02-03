import React, { useState } from "react";
import Modal from "./UserFormModal";

const HomeView = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<button onClick={() => setShow(!show)}>
				Zaloguj się / załóż konto
			</button>
			<Modal show={show} />
		</>
	);
};

export default HomeView;
