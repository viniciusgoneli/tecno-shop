import React from "react";
import "../../styles/globals.css";
import styles from "./Header.module.css";
import Image from "next/image";
import MenuIcon from "../../../public/svg/menu.svg";
import SearchIcon from "../../../public/svg/search.svg";
import BagIcon from "../../../public/svg/bag.svg";
import MouseIcon from "../SvgComponents/mouseIcon";

const ICON_SIZE = 22;

interface HeaderProps {
	onClickMenuButton: () => void;
}

export default function Header({ onClickMenuButton }: HeaderProps) {
	return (
		<header className={styles.wrapper}>
			<section className={styles.main}>
				<h1>
					TecnoShop{" "}
					<MouseIcon
						style={{
							display: "inline-block",
							transform: "rotate(-45deg)",
						}}
					/>
				</h1>
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
					<button
						data-testid="menu"
						onClick={onClickMenuButton}
					>
						<Image
							src={MenuIcon}
							width={ICON_SIZE}
							height={ICON_SIZE}
							alt="Menu icon"
						/>
					</button>
				</div>
			</section>
		</header>
	);
}
