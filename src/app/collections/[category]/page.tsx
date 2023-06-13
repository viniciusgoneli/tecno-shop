import React from "react";
import styles from "./page.module.css";
import ArrowIcon from "@/components/SvgComponents/arrowIcon";
import CollectionsHeader from "@/components/CollectionsHeader";
import ProductCard from "@/components/ProductCard";

export default function CollectionsPage() {
	function getRandomArbitrary(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	return (
		<main className={styles.wrapper}>
			<CollectionsHeader />
			<section className={styles.productsSection}>
				{Array(50)
					.fill(null)
					.map((_) => {
						const price = getRandomArbitrary(
							10.0,
							1000.0
						);

						const img = getRandomArbitrary(1, 7);

						return (
							<ProductCard
								title={
									"Flowers on Sleeves Dress"
								}
								price={price}
								imgProps={{
									src: `/images/product-${Math.floor(
										img
									)}.jpg`,
									alt: "Prod 1",
								}}
								style={{ marginBottom: 20 }}
							/>
						);
					})}
			</section>
		</main>
	);
}
