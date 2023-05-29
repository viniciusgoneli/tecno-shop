"use client";

import React, { useRef } from "react";
import AsideMenu, { AsideMenuRef } from "../AsideMenu";
import Header from "../Header";

export default function HeaderWrapper() {
	const menuRef = useRef<AsideMenuRef>();

	const handleClickMenuButton = () => {
		menuRef.current?.open();
	};

	return (
		<>
			<AsideMenu ref={menuRef} />
			<Header onClickMenuButton={handleClickMenuButton} />
		</>
	);
}
