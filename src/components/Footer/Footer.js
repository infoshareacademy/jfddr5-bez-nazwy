import styles from "./Footer.module.css";
import githublogo from "./images/github.png";

const Footer = () => {
	return (
		<>
		<div style={{height: "1000px"}}></div>
		<div className={styles.container}>
			<div className={styles.left}>
				<div>
					<div className={styles.box}>
						<div className={styles.mark}>petsy</div>
						<div className={styles.aboutus}>
						
						</div>
					</div>
					<div className={styles.rights}>
						<a href=""></a>@ 2022 petsy Inc. Wszystkie prawa
						zastrzeżone
					</div>
				</div>
				<div className={styles.info}>
					<div className={styles.contact}>Kontakt</div>
					<div>ul. FrontEndowska 1</div>
					<div>e-mail: najlepszideveloperzy@gmail.com</div>
					<div>00-600 DevCity</div>
				</div>
			</div>

			<div className={styles.right}>
				<div className={styles.creators}>
					<div className={styles.created}>Created by:</div>
					<div className={styles.github}>
						<span className={styles.author}>Marysia</span>
						<a href="https://github.com/drozdowska-maria" target="blank">
							<img src={githublogo}></img>
						</a>
						<span className={styles.author}>Kasia</span>
						<a href="">
							<img src={githublogo}></img>
						</a>
						<span className={styles.author}>Daniel</span>
						<a href="">
							<img src={githublogo}></img>
						</a>
						<span className={styles.author}>Asia</span>
						<a href="">
							<img src={githublogo}></img>
						</a>
						<span className={styles.author}>Emilka</span>
						<a href="">
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
