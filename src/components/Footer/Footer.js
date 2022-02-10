import styles from "./Footer.module.css";
import githublogo from "./images/github.png";

const Footer = () => {
	return (
		<>
			<div style={{ height: "1000px" }}></div>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.brand}>
						<div className={styles.mark}>petsy</div>
						<div className={styles.rights}>
							@ 2022 petsy Inc. Wszystkie prawa zastrzeżone
						</div>
					</div>
					<div className={styles.info}>
						<div className={styles.contact}>KONTAKT</div>
						<div>ul. FrontEndowska 5</div>
						<div>e-mail: najlepszi.developerzy@gmail.com</div>
						<div>00-600 DevCity</div>
					</div>
				</div>

				<div className={styles.right}>
					<div className={styles.creators}>
						<div className={styles.created}>TWÓRCY APLIKACJI:</div>
						<div className={styles.github}>
							<span className={styles.author}>
								Maria<br></br>Drozdowska
							</span>
							<a
								href="https://github.com/drozdowska-maria"
								target="blank">
								<img src={githublogo}></img>
							</a>

							<span className={styles.author}>
								Katarzyna<br></br> Kabała
							</span>
							<a href="">
								<img src={githublogo}></img>
							</a>
							<span className={styles.author}>
								Daniel<br></br> Jurkiewicz
							</span>
							<a href="">
								<img src={githublogo}></img>
							</a>
							<span className={styles.author}>
								Joanna <br></br>Florczak
							</span>
							<a href="">
								<img src={githublogo}></img>
							</a>
							<span className={styles.author}>
								Emilia <br></br>Brzezińska
							</span>
							<a href="https://github.com/emiliabrzezinska">
								<img src={githublogo}></img>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
