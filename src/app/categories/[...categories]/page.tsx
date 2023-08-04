"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import CollectionsHeader, { SortType } from "@/components/CategoriesHeader";
import ProductsSection from "@/components/ProductsSection";
import ProductCard from "@/components/ProductCard";
import { getFirestoreDatabase } from "@/services/firebase/firebase";
import {
	OrderByDirection,
	collection,
	getDocs,
	orderBy,
	query,
	where,
} from "firebase/firestore";
import { Product } from "@/models/product";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import SadIcon from "../../../../public/svg/sad-icon.svg";
import Image from "next/image";

const db = getFirestoreDatabase();

const getProducts = async (route: string, sortType: SortType) => {
	const prodsCollectionRef = collection(db, "products");
	const [field, order] = sortType.split("-");
	const q = query(
		prodsCollectionRef,
		where("categories", "array-contains-any", [route]),
		orderBy(field, order as OrderByDirection)
	);
	const prodsDocs = (await getDocs(q))?.docs;

	const products = prodsDocs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return products as Product[];
};

export default function CategoriesPage() {
	const categories = useParams().categories.split("/");

	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState<Product[]>([]);
	const [sortType, setSortType] = useState<SortType>("createdAt-asc");

	const loadProducts = async () => {
		setLoading(true);

		const products = await getProducts(
			categories[categories.length - 1],
			sortType
		);

		setProducts(products);
		setLoading(false);
	};

	useEffect(() => {
		loadProducts();
	}, [sortType]);

	return (
		<section className={styles.wrapper}>
			<CollectionsHeader
				sortType={sortType}
				onChangeSortType={setSortType}
			/>
			<section className={styles.productsSection}>
				{loading ? (
					<div className={styles.noItems}>
						<Loading />
					</div>
				) : !products.length ? (
					<div className={styles.noItems}>
						<Image
							src={SadIcon}
							width={50}
							height={50}
							color="#000"
							alt="Sad icon"
						/>
						<h2>
							Desculpe, não encontramos nenhum
							produto na categoria selecionada.
						</h2>
					</div>
				) : (
					products?.map((it) => (
						<ProductCard
							key={it.id}
							item={it}
							style={{ marginBottom: 20 }}
						/>
					))
				)}
			</section>
		</section>
	);
}
