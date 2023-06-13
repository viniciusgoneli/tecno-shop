import React from "react";
import "../../styles/globals.css";
import styles from "./Header.module.css";
import Image from "next/image";
import MenuIcon from "../../../public/svg/menu.svg";
import SearchIcon from "../../../public/svg/search.svg";
import BagIcon from "../../../public/svg/bag.svg";

const ICON_SIZE = 24;

interface HeaderProps {
	onClickMenuButton: () => void;
}

export default function Header({ onClickMenuButton }: HeaderProps) {
	return (
		<header className={styles.wrapper}>
			<section className={styles.banner}>
				<p>Free Shipping On All U.S. Orders</p>
			</section>
			<section className={styles.main}>
				<button data-testid="menu" onClick={onClickMenuButton}>
					<Image
						src={MenuIcon}
						width={ICON_SIZE}
						height={ICON_SIZE}
						alt="Menu icon"
					/>
				</button>
				<h1>TecnoShop</h1>
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
