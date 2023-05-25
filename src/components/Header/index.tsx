import React from "react";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<section className={styles.banner}>
				<p className={styles.bannerText}>
					Free Shipping On All U.S. Orders
				</p>
			</section>
			<section>
				<div>
					<button></button>
					<h1 className={styles.appName}>Participle+</h1>
					<div>
						<button></button>
						<button></button>
					</div>
				</div>
			</section>
		</header>
	);
}
