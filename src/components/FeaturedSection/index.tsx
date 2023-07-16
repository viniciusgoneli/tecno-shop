import React, { CSSProperties, useEffect, useState } from "react";
import styles from "./FeaturedSection.module.css";
import HomeCard from "../HomeCard";
import ItemsSlider from "../ItemsSlider";
import { getFirestoreDatabase } from "@/services/firebase/firebase";
import {
	collection,
	getDoc,
	getDocs,
	getFirestore,
	doc,
	orderBy,
	limit,
	query,
	DocumentData,
} from "firebase/firestore";
import { Product } from "@/models/product";

interface HomeCardRenderItem {
	item: any;
	index: number;
}

interface FeaturedSectionProps {
	style?: CSSProperties;
}

const db = getFirestoreDatabase();

const getProducts = async () => {
	const prodsCollectionRef = collection(db, "products");
	const prodsDocs = (await getDocs(prodsCollectionRef))?.docs;

	const products = prodsDocs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return products;
};

export default async function FeaturedSection({ style }: FeaturedSectionProps) {
	const products = (await getProducts()) as Product[];

	return (
		<section style={style} className={styles.wrapper}>
			<h2 className={styles.title}>Destaques</h2>
			<ItemsSlider itemOffset={300}>
				{products?.map((p) => (
					<HomeCard key={p.id} item={p} />
				))}
			</ItemsSlider>
		</section>
	);
}
