import React from "react";
import "../../styles/globals.css";
import styles from "./Header.module.css";
import Image from "next/image";
import MenuIcon from "../../../public/icons/menu.svg";
import SearchIcon from "../../../public/icons/search.svg";
import BagIcon from "../../../public/icons/bag.svg";

const ICON_SIZE = 24;

export default function Header() {
	return (
		<header className={styles.wrapper}>
			<section className={styles.banner}>
				<p>Free Shipping On All U.S. Orders</p>
			</section>
			<section className={styles.main}>
				<button>
					<Image
						src={MenuIcon}
						width={ICON_SIZE}
						height={ICON_SIZE}
						alt="Menu icon"
					/>
				</button>
				<h1>Participle+</h1>
				<div className={styles.row}>
					<button>
						<Image
							src={SearchIcon}
							width={ICON_SIZE}
							height={ICON_SIZE}
							alt="Search icon"
						/>
					</button>
					<button>
						<Image
							src={BagIcon}
							width={ICON_SIZE}
							height={ICON_SIZE}
							alt="Bag icon"
						/>
					</button>
				</div>
			</section>
		</header>
	);
}
