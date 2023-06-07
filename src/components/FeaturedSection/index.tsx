import React, { CSSProperties } from "react";
import styles from "./FeaturedSection.module.css";
import ProductCard from "../ProductCard";

interface FeaturedSectionProps {
	style?: CSSProperties;
}

export default function FeaturedSection({ style }: FeaturedSectionProps) {
	return (
		<section style={style} className={styles.wrapper}>
			<h3>Featured</h3>
			<div className={styles.cardsWrapper}>
				<ProductCard
					title={"Flowers on Sleeves Dress"}
					price={155}
					imgProps={{
						src: "/images/product-1.jpg",
						alt: "Prod 1",
					}}
					style={{ marginBottom: 20 }}
				/>
				<ProductCard
					title={"Cat-Eye Resin Sunglasses in Clear"}
					price={45}
					imgProps={{
						src: "/images/product-2.jpg",
						alt: "Prod 2",
					}}
					style={{ marginBottom: 20 }}
				/>
				<ProductCard
					title={"Flowers on Sleeves Dress"}
					price={115}
					imgProps={{
						src: "/images/product-3.jpg",
						alt: "Prod 3",
					}}
					style={{ marginBottom: 20 }}
				/>
				<ProductCard
					title={"Cat-Eye Resin Sunglasses in Clear"}
					price={78}
					discountPercent={0.5}
					imgProps={{
						src: "/images/product-4.jpg",
						alt: "Prod 4",
					}}
				/>
			</div>
		</section>
	);
}
