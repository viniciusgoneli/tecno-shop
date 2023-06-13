import Image from "next/image";
import React, { CSSProperties } from "react";
import styles from "./HomeCard.module.css";
import Carousel, { CarouselProps } from "../Carousel";
import { ImageProps } from "@/types/imageProps";
import Link from "next/link";

interface HomeCardProps {
	images: ImageProps[];
	title: string;
	subtitle: string;
	style?: CSSProperties;
	carouselProps?: Omit<CarouselProps, "images">;
}

export default function HomeCard({
	carouselProps,
	images,
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
			{images?.length > 1 ? (
				<Carousel {...carouselProps} images={images} />
			) : (
				<Image
					src={images[0].src}
					alt={images[0].alt}
					width={291}
					height={420}
				/>
			)}
			<h4>{title}</h4>
			<p>{subtitle}</p>
		</Link>
	);
}
