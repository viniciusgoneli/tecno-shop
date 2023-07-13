import Link from "next/link";
import React from "react";
import styles from "./SearchProductCard.module.css";
import Image from "next/image";

interface SearchProductCardProps {
	product: any;
}

export default function SearchProductCard({ product }: SearchProductCardProps) {
	return (
		<Link href={`/product/${product?.id}`} className={styles.wrapper}>
			<Image
				src={product?.images[0]?.src}
				alt={product?.images[0]?.alt}
				width={50}
				height={50}
			/>
			<h2>{product?.name}</h2>
		</Link>
	);
}
