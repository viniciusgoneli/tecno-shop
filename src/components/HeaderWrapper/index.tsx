"use client";

import React, { useRef } from "react";
import AsideMenu, { AsideMenuRef } from "../AsideMenu";
import Header from "../Header";
import styles from "./HeaderWrapper.module.css";

export default function HeaderWrapper() {
	const menuRef = useRef<AsideMenuRef>();

	const handleClickMenuButton = () => {
		menuRef.current?.open();
	};

	return (
		<div className={styles.wrapper}>
			<AsideMenu ref={menuRef} />
			<Header onClickMenuButton={handleClickMenuButton} />
		</div>
	);
}
