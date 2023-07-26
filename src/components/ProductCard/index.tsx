import Image from "next/image";
import React, { CSSProperties, Suspense } from "react";
import styles from "./ProductCard.module.css";
import ImagesCarousel, { CarouselProps } from "../Carousel";
import { FileNameImageProps, ImageSrcProps } from "@/models/imageProps";
import Link from "next/link";
import { getFirebaseStorage } from "@/services/firebase/firebase";
import getFirebaseStorageRef from "@/services/firebase/getFirebaseStorageRef";
import LazyImage from "../LazyImage";
import BlackButton from "../BlackButton";
import AddToCartButton from "../AddToCartButton/indext";
import { Product } from "@/models/product";
import { formatPrice } from "@/utils/functions";

export interface ProductCardProps {
	item: Product;
	style?: CSSProperties;
}

export default function ProductCard({ item, style }: ProductCardProps) {
	const PRODUCT_PATH = `/product/${item.id}`;

	return (
		<div className={styles.wrapper} style={{ ...style }}>
			<Link href={PRODUCT_PATH}>
				<div className={styles.imgWrapper}>
					<Image {...item.images[0]} fill />
				</div>
			</Link>
			<div className={styles.info}>
				<Link href={PRODUCT_PATH}>
					<h5>{item.name}</h5>
				</Link>

				<div className={styles.priceWrapper}>
					{!item?.promotionalPrice ? (
						<p className={styles.oldPrice}>
							{formatPrice(item?.price * 0.85)}
						</p>
					) : null}

					<p className={styles.price}>
						{formatPrice(item?.price)}
					</p>
				</div>
				<AddToCartButton
					label="+ Carrinho"
					productJson={JSON.stringify(item)}
					quantity={1}
				/>
			</div>
		</div>
	);
}
