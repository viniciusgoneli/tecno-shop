import React from "react";
import styles from "./page.module.css";
import CollectionsHeader from "@/components/CollectionsHeader";
import ProductCard from "@/components/ProductCard";
import { getFirestoreDatabase } from "@/services/firebase/firebase";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import {
	collection,
	getDocs,
	limit,
	orderBy,
	query,
	where,
} from "firebase/firestore";
import { Product } from "@/models/product";

const db = getFirestoreDatabase();

interface CollectionsPageProps {
	params: Params;
}

const getProducts = async (route: string) => {
	const prodsCollectionRef = collection(db, "products");
	const q = query(
		prodsCollectionRef,
		where("categories", "array-contains-any", [route])
	);
	const prodsDocs = (await getDocs(q))?.docs;

	const products = prodsDocs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return products;
};

export default async function CollectionsPage({
	params,
}: CollectionsPageProps) {
	const products = await getProducts(params?.categories?.pop());

	return (
		<main className={styles.wrapper}>
			<CollectionsHeader />
			<section className={styles.productsSection}>
				{products?.map((it) => (
					<ProductCard
						item={it}
						style={{ marginBottom: 20 }}
					/>
				))}
			</section>
		</main>
	);
}
