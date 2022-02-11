import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { modalDisplayContext } from "../../../contexts/ModalDisplayContext";
import styles from "./SuccessAlert.module.css";

const SuccessAlert = () => {
	const [displayModal, setDisplayModal] = useContext(modalDisplayContext);
	const navigate = useNavigate();
	return (
		<div className={styles.content}>
			<p>Twoja rezerwacja została przyjęta, dziękujemy!</p>
			<div>
				<button onClick={() => setDisplayModal("")}>Ok</button>
				<button onClick={() => navigate("/profile")}>
					Twoje rezerwacje
				</button>
			</div>
		</div>
	);
};

export default SuccessAlert;
