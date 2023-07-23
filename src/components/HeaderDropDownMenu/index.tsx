"use client";

import { MenuItem } from "@/models/asideMenuItem";
import React, {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import styles from "./HeaderDropDownMenu.module.css";
import Link from "next/link";

interface HeaderDropDownMenuProps {
	data: MenuItem[];
	onClickItem: (item: MenuItem) => void;
}

export default function HeaderDropDrownMenu({
	data,
	onClickItem,
}: HeaderDropDownMenuProps) {
	const wrapperRef = useRef<HTMLUListElement>();

	const [activeItems, setActiveItems] = useState<Map<number, MenuItem>>(
		new Map([])
	);

	const renderListItem = (item: MenuItem) => {
		const handleMouseOver = () => {
			const updatedItems = new Map<number, MenuItem>(activeItems);
			updatedItems.set(item.level, item);

			setActiveItems(updatedItems);
		};

		const handleMouseOut = () => {
			const updatedItems = new Map<number, MenuItem>(activeItems);

			if (item.level == 0) {
				updatedItems.clear();
				setActiveItems(updatedItems);
				return;
			}

			updatedItems.delete(item.level);
			setActiveItems(updatedItems);
		};

		const handleClickItem = () => {
			onClickItem(item);
		};

		const selected =
			activeItems.get(item.level)?.id == item.id
				? styles.itemSelected
				: "";

		return (
			<li
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				key={item.id}
				className={selected}
			>
				<a onClick={handleClickItem}>{item.title}</a>
			</li>
		);
	};

	return (
		<div ref={wrapperRef as any} className={styles.wrapper}>
			<ul>{data.map(renderListItem)}</ul>
			{Array.from(activeItems.values()).map((it) =>
				it.subItems.length ? (
					<ul>{it.subItems.map(renderListItem)}</ul>
				) : null
			)}
		</div>
	);
}
