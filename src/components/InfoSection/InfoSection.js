import React from "react";
import styles from "./InfoSection.module.css";
import pets1 from "./images/pets1.jpg";
import pets2 from "./images/pets2.jpg";

const InfoSection = () => {
	return (
		<div className={styles.divStyle}>
			<div className={styles.rowBox}>
				<div className={styles.textBox}>
					<h2>Umów swojego Futrzaka na wizytę!</h2>
					<p>
						Chcesz umówić swojego pupila do groomera, hodowcy,
						weterynarza, behawiorysty lub hotelu dla zwierząt w
						swojej okolicy? Szukasz miejsca, w którym twoja pociecha
						otrzyma najlepszą opiekę pod słońcem? Petsy to darmowa
						aplikacja do rezerwacji, dzięki swojej łatwości w
						obsłudze, bez poroblemu znajdziesz dogodny termin dla
						siebie i swojego pupila. Bez wychodzenia z domu albo
						sięgania po telefon-na petsy zarezerwujesz wygodny dla
						was termin o każdej porze bez względu na miejsce.
					</p>
					<strong>
						Odkrywaj nowe usługi dla swoich Milusińskich i umawiaj
						ich na wizyty z Petsy!{" "}
					</strong>
				</div>
				<div>
					<img
						src={pets1}
						alt="four dogs looking at cookie in hand"
						className={styles.imgStyle}
					/>
				</div>
			</div>

			<div className={styles.rowBox}>
				<div>
					<img
						src={pets2}
						alt="cat touching hand with woman"
						className={styles.imgStyle}
					/>
				</div>
				<div className={styles.textBox}>
					<h2> Specjaliści w Twojej okolicy </h2>
					<p>
						W petsy znajdziesz najlepsze salony dla swoich
						Ulubieńców w wygodnej dla was okolicy. Dowiedz się o
						nich jak najwięcej - przeczytaj opinie innych klientów i
						przejrzyj usługi jakie oferują. Oszczędź czas na
						umawianiu wizyt. Dzięki Petsy będziesz miał więcej czasu
						na zabawę ze swoim Futrzakiem.
					</p>
					<strong>
						Nasza aplikacja jest bardzo prosta w użyciu.
					</strong>
				</div>
			</div>
		</div>
	);
};
export default InfoSection;
