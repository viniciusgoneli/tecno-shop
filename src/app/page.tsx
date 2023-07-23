import styles from "./page.module.css";
import React from "react";
import FeaturedSection from "@/components/FeaturedSection";
import CategoriesSection from "@/components/CategoriesSection";

export default function Home() {
	return (
		<main className={styles.main}>
			<FeaturedSection style={{ marginBottom: 20 }} />
			<CategoriesSection />
		</main>
	);
}
