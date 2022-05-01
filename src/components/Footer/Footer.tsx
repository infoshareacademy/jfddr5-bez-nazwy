import styles from "./Footer.module.css";
import githublogo from "./images/github.png";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.brand}>
					<div className={styles.mark}>petsy</div>
					<div className={styles.rights}>
						@ 2022 petsy Inc. <p>Wszystkie prawa zastrzeżone</p>
					</div>
				</div>
				<div className={styles.info}>
					<div className={styles.contact}>KONTAKT</div>
					<div>developerzy@petsy.com</div>
					<div>ul. FrontEndowska 5</div>
					<div>00-600 DevCity</div>
				</div>
			</div>

			<div className={styles.right}>
				<div className={styles.created}>TWÓRCY APLIKACJI:</div>
				<div className={styles.github}>
					<span className={styles.author}>
						Maria<br></br>Drozdowska
					</span>
					<a
						href="https://github.com/drozdowska-maria"
						target="blank">
						<img
							className={styles.photo}
							src={githublogo}
							alt="logo github"></img>
					</a>

					<span className={styles.author}>
						Katarzyna<br></br> Kabała
					</span>
					<a href="https://github.com/Kasiaqu" target="blank">
						<img
							className={styles.photo}
							src={githublogo}
							alt="logo github"></img>
					</a>
					<span className={styles.author}>
						Daniel<br></br> Jurkiewicz
					</span>
					<a
						href="https://github.com/daniel-jurkiewicz"
						target="blank">
						<img
							className={styles.photo}
							src={githublogo}
							alt="logo github"></img>
					</a>
					<span className={styles.author}>
						Joanna <br></br>Florczak
					</span>
					<a href="https://github.com/Joanna35" target="blank">
						<img
							className={styles.photo}
							src={githublogo}
							alt="logo github"></img>
					</a>
					<span className={styles.author}>
						Emilia <br></br>Brzezińska
					</span>
					<a
						href="https://github.com/emiliabrzezinska"
						target="blank">
						<img
							className={styles.photo}
							src={githublogo}
							alt="logo github"></img>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
