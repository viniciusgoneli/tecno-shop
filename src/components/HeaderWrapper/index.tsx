import React, { useEffect, useRef, useState } from "react";
import AsideMenu, { AsideMenuRef } from "../AsideMenu";
import SearchWindow, { SearchWindowRef } from "../SearchWindow";
import CartModal, { CartModalRef } from "../CartModal";
import { MenuItem } from "@/models/asideMenuItem";
import { ProductCategory } from "@/models/product";
import { collection, getDocs } from "firebase/firestore";
import { getFirestoreDatabase } from "@/services/firebase/firebase";
import Header from "../Header";
import styles from "./HeaderWrapper.module.css";
import { uuid } from "uuidv4";

const db = getFirestoreDatabase();

const getMenuItems = async () => {
	const ref = collection(db, "categories");
	const categoriesDocs = (await getDocs(ref))?.docs;
	const categories = categoriesDocs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	})) as ProductCategory[];

	const mainCategories = categories.filter(
		(c) => c.subcategories.length && !c.parent
	);

	const menuItems = mapCategoriesToMenuItems(mainCategories, categories);

	return menuItems;
};

const mapCategoriesToMenuItems = (
	targetCategories: ProductCategory[],
	allCategories: ProductCategory[]
): MenuItem[] => {
	return targetCategories.map((tc) => {
		const subCategories = allCategories.filter((cat) => {
			if (!tc.subcategories.length) return false;

			return !!tc.subcategories.find((sc) => sc === cat.handleName);
		});

		const path = getCategoryPath(tc, allCategories);

		const href = `/categories/${path}`;

		return {
			id: uuid(),
			title: tc.name,
			href,
			subItems: mapCategoriesToMenuItems(
				subCategories,
				allCategories
			),
			parentId: tc?.parent,
			level: tc.level,
		} as MenuItem;
	});
};

const getCategoryPath = (currCategory: any, allCategories: any[]) => {
	const routes = [];

	let parent = allCategories.find((c) => c?.id == currCategory?.parent);

	routes.push(currCategory.id);
	while (parent) {
		routes.push(parent.id);
		parent = allCategories.find((c) => c?.id == parent?.parent);
	}

	return routes.reverse().join("/");
};

export default function HeaderWrapper() {
	const menuRef = useRef<AsideMenuRef>();
	const searchWindowRef = useRef<SearchWindowRef>();
	const cartModalRef = useRef<CartModalRef>();

	const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

	const handleClickMenuButton = () => {
		menuRef.current?.open();
	};

	const handleClickSearchButton = () => {
		searchWindowRef.current?.open();
	};

	const handleClickCartButton = () => {
		cartModalRef.current?.open();
	};

	const loadItems = async () => {
		const items = await getMenuItems();
		setMenuItems(items);
	};

	useEffect(() => {
		loadItems();
	}, []);
	return (
		<div className={styles.wrapper}>
			{menuItems ? (
				<AsideMenu items={menuItems} ref={menuRef} />
			) : null}
			<SearchWindow ref={searchWindowRef} />
			<CartModal ref={cartModalRef} />
			<Header
				onClickMenuButton={handleClickMenuButton}
				onClickSearchButton={handleClickSearchButton}
				onClickCartButton={handleClickCartButton}
				categoriesMenuItems={menuItems}
			/>
		</div>
	);
}
