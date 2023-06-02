import React, { useState } from "react";
import styles from "./AsideMenuSubMenu.module.css";
import { menuData } from "./menuData";
import { AsideMenuItem } from "@/types/asideMenuItem";
import ArrowIcon from "../../../public/icons/arrow-up.svg";
import Image from "next/image";
import { accountData } from "./accountData";

export default function AsideMenuSubMenu() {
	const [showSubItems, setShowSubItems] = useState(false);
	const [arrowClass, setArrowClass] = useState(styles.arrowDown);
	const [selectedTabIndex, setSelectedTabIndex] = useState(0);
	const [tabData, setTabData] = useState<AsideMenuItem[]>(menuData);

	const ListItem = (item: AsideMenuItem) => {
		const hasSubItems = !!item.subItems.length;

		const handleClickMenu = () => {
			if (!hasSubItems) return;

			setShowSubItems(!showSubItems);

			if (showSubItems) setArrowClass(styles.arrowDown);
			else setArrowClass(styles.arrowUp);
		};

		return (
			<li data-testid={`li-subitem-${hasSubItems}`} key={item.id}>
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

	const handleSelectMenuTab = () => {
		setSelectedTabIndex(0);
		setTabData(menuData);
	};

	const handleSelectAccountTab = () => {
		setSelectedTabIndex(1);
		setTabData(accountData);
	};

	return (
		<section className={styles.wrapper}>
			<section className={styles.menus}>
				<nav>
					<div
						data-testid="menu-tab"
						className={`${styles.menuButton} ${
							selectedTabIndex == 0
								? styles.menuButtonSelected
								: ""
						}`}
					>
						<button onClick={handleSelectMenuTab}>
							<span>Menu</span>
						</button>
					</div>
					<div
						data-testid="account-tab"
						className={`${styles.menuButton} ${
							selectedTabIndex == 1
								? styles.menuButtonSelected
								: ""
						}`}
					>
						<button onClick={handleSelectAccountTab}>
							<span>Account</span>
						</button>
					</div>
				</nav>
			</section>
			<section className={styles.itemsWrapper}>
				<ul data-testid="list-items">
					{tabData?.map((it) => ListItem(it))}
				</ul>
			</section>
		</section>
	);
}
