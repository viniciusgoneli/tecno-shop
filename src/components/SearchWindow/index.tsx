"use client";

import React, {
	forwardRef,
	useContext,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";
import styles from "./SearchWindow.module.css";
import Image from "next/image";
import CloseIcon from "../../../public/svg/close-icon.svg";
import SearchBar from "../SearchBar";
import { getFirestoreDatabase } from "@/services/firebase/firebase";
import getFirebaseDatabaseRef from "@/services/firebase/getFirebaseDatabaseRef";
import { convertJsonToArray } from "@/utils/functions";
import SearchProductCard from "../SearchProductCard";
import {
	collection,
	getDocs,
	limit,
	orderBy,
	query,
	where,
} from "firebase/firestore";
import { ScrollContext } from "@/contexts/ScrollContextProvider";

export interface SearchWindowRef {
	open: () => void;
	close: () => void;
}

const db = getFirestoreDatabase();

export default forwardRef((props, ref) => {
	const { setScrollEnabled } = useContext(ScrollContext);

	const [visible, setVisible] = useState(false);
	const [searchFilter, setSearchFilter] = useState("");
	const [searchData, setSearchData] = useState<any[]>([]);

	const open = () => {
		setScrollEnabled(false);
		setVisible(true);
	};

	const close = () => {
		setScrollEnabled(true);
		setVisible(false);
	};

	useImperativeHandle(
		ref,
		() => ({
			open,
			close,
		}),
		[]
	);

	const loadProducts = async () => {
		const prodsCollection = collection(db, "products");
		const q = query(
			prodsCollection,
			where("tags", "array-contains-any", [
				searchFilter.toLowerCase(),
			])
		);
		const prodsDocs = (await getDocs(q)).docs;

		const products = [];
		for (const d of prodsDocs) {
			const prod = d.data();
			prod.id = d.id;

			const imgsPath = `products/${d.id}/images`;
			const imgsRef = collection(db, imgsPath);
			const q = query(imgsRef, orderBy("position"), limit(1));
			const imgDoc = (await getDocs(q))?.docs[0];
			const imgData = imgDoc?.data();

			prod.images = [{ src: imgData?.src, alt: imgData?.alt }];
			products.push(prod);
		}

		setSearchData(products);
	};

	useEffect(() => {
		loadProducts();
	}, [searchFilter]);

	if (!visible) return <></>;

	return (
		<section className={styles.wrapper}>
			<section className={styles.topBar}>
				<button onClick={close}>
					<Image
						src={CloseIcon}
						fill
						alt="Botao 'fechar' em forma de X"
					/>
				</button>
			</section>
			<section className={styles.content}>
				<div>
					<SearchBar
						value={searchFilter}
						onChangeValue={setSearchFilter}
					/>
				</div>
				<ul className={styles.searchedData}>
					{searchData?.map((p) => (
						<li key={p?.id}>
							<SearchProductCard product={p} />
						</li>
					))}
				</ul>
			</section>
		</section>
	);
});
