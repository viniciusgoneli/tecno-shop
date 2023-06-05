import Image, { ImageProps } from "next/image";
import React, { CSSProperties } from "react";
import styles from "./HomeCard.module.css";
import Carousel, { CarouselProps } from "../Carousel";

interface HomeCardProps {
	carouselProps: Omit<CarouselProps, "width">;
	width: number;
	title: string;
	subtitle: string;
	style?: CSSProperties;
}

export default function HomeCard({
	carouselProps,
	width,
	title,
	subtitle,
	style,
}: HomeCardProps) {
	return (
		<div className={styles.wrapper} style={{ ...style, width }}>
			<Carousel {...carouselProps} width={width} autoplay />
			<h4>{title}</h4>
			<p>{subtitle}</p>
		</div>
	);
}
