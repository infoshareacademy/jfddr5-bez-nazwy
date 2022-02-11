import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { modalDisplayContext } from "../../../contexts/ModalDisplayContext";

const SuccessAlert = () => {
	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
	const navigate = useNavigate();
	return (
		<div>
			<p>Twoja rezerwacja została przyjęta, dziękujemy!</p>
			<button onClick={() => setDisplayModal("")}>Ok</button>
			<button onClick={() => navigate("/profile")}>
				Twoje rezerwacje
			</button>
		</div>
	);
};

export default SuccessAlert;
