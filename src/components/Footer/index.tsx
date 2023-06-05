import React from "react";
import styles from "./Footer.module.css";
import { connectLinks, customerCareLinks } from "./data";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<form>
				<input placeholder="Email" type="email" />
				<button>
					<span>Sign Up!</span>
				</button>
			</form>
			<div className={styles.info}>
				<div>
					<h4>Customer Care</h4>
					<ul>
						{customerCareLinks.map((it) => (
							<li key={it.id}>
								<a href={it.href}>
									{it.description}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4>Connect</h4>
					<ul>
						{connectLinks.map((it) => (
							<li key={it.id}>
								<a href={it.href}>
									{it.description}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
