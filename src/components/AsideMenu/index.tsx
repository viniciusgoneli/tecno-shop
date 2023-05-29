"use client";

import React, {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";
import "../../styles/globals.css";
import styles from "./AsideMenu.module.css";
import AsideMenuSubMenu from "../AsideMenuSubmenu";

export interface AsideMenuRef {
	open: () => void;
	close: () => void;
}

export default forwardRef((props, ref) => {
	const [isVisible, setIsVisible] = useState(false);
	const [menuClass, setMenuClass] = useState<any>(styles.menu);
	const [darkLayerClass, setDarkLayerClass] = useState<any>(
		styles.darkLayer
	);

	const open = () => {
		setIsVisible(true);
	};

	const close = () => {
		const menuDiv = document.getElementById("aside-menu");
		menuDiv?.removeEventListener("animationend", close);

		setMenuClass(styles.menu);
		setDarkLayerClass(styles.darkLayer);
		setIsVisible(false);
	};

	useImperativeHandle(
		ref,
		() => ({
			open,
			close,
		}),
		[]
	);

	if (!isVisible) return <></>;

	const handleClickDarkLayer = () => {
		const menuDiv = document.getElementById("aside-menu");
		menuDiv?.addEventListener("animationend", close);

		setMenuClass(styles.menuClosed);
		setDarkLayerClass(styles.darkLayerHidden);
	};

	return (
		<div className={styles.wrapper}>
			<div
				onClick={handleClickDarkLayer}
				className={darkLayerClass}
			/>
			<div id="aside-menu" className={menuClass}>
				<AsideMenuSubMenu />
			</div>
		</div>
	);
});
