import Image from "next/image";
import React, { CSSProperties, Suspense } from "react";
import styles from "./HomeCard.module.css";
import Carousel, { CarouselProps } from "../Carousel";
import Link from "next/link";
import { ImageSrcProps } from "@/types/imageProps";
import LazyImage from "../LazyImage";
import Button from "../Button";

interface HomeCardProps {
	imagePromise: Promise<ImageSrcProps>;
	title: string;
	subtitle: string;
	style?: CSSProperties;
	carouselProps?: Omit<CarouselProps, "images">;
}

export default async function HomeCard({
	carouselProps,
	imagePromise,
	title,
	subtitle,
	style,
}: HomeCardProps) {
	return (
		<Link
			className={styles.wrapper}
			style={style}
			href={"/collections/clothing"}
		>
			<div className={styles.imgWrapper}>
				<Suspense fallback={<p></p>}>
					<LazyImage
						className={styles.img}
						imagePromise={imagePromise}
						fill
					/>
				</Suspense>
			</div>
			<div className={styles.content}>
				<p>R$ 299,00</p>
				<h4>{title}</h4>
				<Button label={"Buy"} />
			</div>
		</Link>
	);
}
