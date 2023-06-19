import React, { useState } from "react";
import styles from "./AsideMenuSubMenu.module.css";
import { menuData } from "./menuData";
import { AsideMenuItem } from "@/models/asideMenuItem";
import Image from "next/image";
import { accountData } from "./accountData";
import ArrowIcon, { ArrowDir } from "../SvgComponents/arrowIcon";

export default function AsideMenuSubMenu() {
	const [showSubItems, setShowSubItems] = useState(false);
	const [arrowDir, setArrowDir] = useState<ArrowDir>("down");
	const [selectedTabIndex, setSelectedTabIndex] = useState(0);
	const [tabData, setTabData] = useState<AsideMenuItem[]>(menuData);

	const ListItem = (item: AsideMenuItem) => {
		const hasSubItems = !!item.subItems.length;

		const handleClickMenu = () => {
			if (!hasSubItems) return;

			setShowSubItems(!showSubItems);

			if (showSubItems) setArrowDir("down");
			else setArrowDir("up");
		};

		return (
			<li data-testid={`li-subitem-${hasSubItems}`} key={item.id}>
				<a
					href={hasSubItems ? undefined : ""}
					onClick={handleClickMenu}
				>
					{item.title}
					{hasSubItems ? (
						<div className={styles.arrow}>
							<ArrowIcon
								width={12}
								height={12}
								dir={arrowDir}
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
