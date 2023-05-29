import React, { useState } from "react";
import styles from "./AsideMenuSubMenu.module.css";
import { menuData } from "./menuData";
import { AsideMenuItem } from "@/types/asideMenuItem";
import ArrowIcon from "../../../public/icons/arrow-up.svg";
import Image from "next/image";

export default function AsideMenuSubMenu() {
	const [showSubItems, setShowSubItems] = useState(false);
	const [arrowClass, setArrowClass] = useState(styles.arrowDown);

	const ListItem = (item: AsideMenuItem) => {
		const hasSubItems = !!item.subItems.length;

		const handleClickMenu = () => {
			if (!hasSubItems) return;

			setShowSubItems(!showSubItems);

			if (showSubItems) setArrowClass(styles.arrowDown);
			else setArrowClass(styles.arrowUp);
		};

		return (
			<li key={item.id}>
				<a
					href={hasSubItems ? undefined : ""}
					onClick={handleClickMenu}
				>
					{item.title}
					{hasSubItems ? (
						<div className={arrowClass}>
							<Image
								src={ArrowIcon}
								width={16}
								height={16}
								alt="Arrow icon"
							/>
						</div>
					) : null}
				</a>

				{showSubItems ? (
					<ul className={styles.subitems}>
						{item.subItems?.map((it) => (
							<li key={it.id}>
								<a href="">- {it.title}</a>
							</li>
						))}
					</ul>
				) : null}
			</li>
		);
	};

	return (
		<section className={styles.wrapper}>
			<section className={styles.menus}>
				<nav>
					<div className={styles.menuButton}>
						<button>Menu</button>
					</div>
					<div className={styles.menuButton}>
						<button>Account</button>
					</div>
				</nav>
			</section>
			<section className={styles.itemsWrapper}>
				<ul>{menuData?.map((it) => ListItem(it))}</ul>
			</section>
		</section>
	);
}
