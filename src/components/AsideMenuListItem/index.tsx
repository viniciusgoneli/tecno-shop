import { AsideMenuItem } from "@/models/asideMenuItem";
import React from "react";
import ArrowIcon from "../SvgComponents/arrowIcon";
import styles from "./AsideMenuListItem.module.css";
import Link from "next/link";

interface AsideMenuListItemProps {
	item: AsideMenuItem;
	onClickButton?: (item: AsideMenuItem) => void;
	onClickLink?: (item: AsideMenuItem) => void;
}

export default function AsideMenuListItem({
	item,
	onClickButton,
	onClickLink,
}: AsideMenuListItemProps) {
	const hasSubItems = !!item.subItems.length;

	const handleClickButton = () => {
		if (onClickButton) onClickButton(item);
	};

	const handleClickLink = () => {
		if (onClickLink) onClickLink(item);
	};

	const Content = (
		<div className={styles.linkContent}>
			<h3>{item.title}</h3>
			{hasSubItems ? (
				<div className={styles.arrow}>
					<ArrowIcon width={12} height={12} dir={"right"} />
				</div>
			) : null}
		</div>
	);

	return (
		<li data-testid={`li-subitem-${hasSubItems}`} key={item.id}>
			{hasSubItems ? (
				<button
					className={styles.btn}
					onClick={handleClickButton}
				>
					{Content}
				</button>
			) : (
				<Link href={item.href} onClick={handleClickLink}>
					{Content}
				</Link>
			)}
		</li>
	);
}
