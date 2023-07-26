import React, { CSSProperties } from "react";
import styles from "./CategoriesSection.module.css";
import CategoryCard from "../CategoryCard";
import { getFirestoreDatabase } from "@/services/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ProductCategory } from "@/models/product";

interface CategoriesSectionProps {
	style?: CSSProperties;
}

const db = getFirestoreDatabase();

const getMainCategories = async () => {
	const categoriesRef = collection(db, "categories");

	const q = query(categoriesRef, where("parent", "==", ""));
	const categoriesDocs = (await getDocs(q))?.docs;

	const categories = categoriesDocs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return categories as ProductCategory[];
};

export default async function CategoriesSection({
	style,
}: CategoriesSectionProps) {
	const categories = await getMainCategories();

	return (
		<section style={style} className={styles.wrapper}>
			<h2 className={styles.title}>Categorias</h2>
			<ul>
				{categories.map((it) => (
					<li key={it.id}>
						<CategoryCard item={it} />
					</li>
				))}
			</ul>
		</section>
	);
}
