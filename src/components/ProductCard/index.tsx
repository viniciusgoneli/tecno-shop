import Image from "next/image";
import React, { CSSProperties } from "react";
import styles from "./ProductCard.module.css";
import ImagesCarousel, { CarouselProps } from "../Carousel";
import { ImageProps } from "@/types/imageProps";

export interface ProductCardProps {
	title: string;
	price: number;
	imgProps: ImageProps;
	discountPercent?: number;
	style?: CSSProperties;
}

export default function ProductCard({
	title,
	price,
	imgProps,
	discountPercent,
	style,
}: ProductCardProps) {
	return (
		<div className={styles.wrapper} style={{ ...style, width: 140 }}>
			<div className={styles.imgWrapper}>
				<Image
					data-testid="prod-card-img"
					{...imgProps}
					width={140}
					height={179}
				/>
			</div>
			<div className={styles.info}>
				<h5>{title}</h5>
				<div className={styles.priceWrapper}>
					{discountPercent ? (
						<p className={styles.priceWithDiscount}>
							$
							{(discountPercent * price).toFixed(2)}
						</p>
					) : (
						<p className={styles.price}>
							${price.toFixed(2)}
						</p>
					)}

					{discountPercent ? (
						<p className={styles.oldPrice}>
							${price.toFixed(2)}
						</p>
					) : null}
				</div>
			</div>
		</div>
	);
}
