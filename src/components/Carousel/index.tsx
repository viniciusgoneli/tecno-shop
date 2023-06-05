"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import { ImageProps } from "@/types/imageProps";

export interface CarouselProps {
	images: ImageProps[];
	width: number;
	height: number;
	autoplay?: boolean;
	autoplayDuration?: number;
}

export default function Carousel({
	images,
	width,
	height,
	autoplay,
	autoplayDuration = 1500,
}: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const sliderRef = useRef<HTMLDivElement>();

	const renderDot = (index: number) => {
		const handleClickDot = () => {
			moveSliderToIndex(index);
		};

		return (
			<div
				data-testid={`dot_${index}`}
				onClick={handleClickDot}
				key={index}
				className={`${styles.dot} ${
					currentIndex == index ? styles.dotFill : ""
				}`}
			/>
		);
	};

	const moveSliderToIndex = (index: number) => {
		if (!sliderRef.current) return;

		sliderRef.current.style.transform = `translateX(-${
			index * width
		}px)`;

		setCurrentIndex(index);
	};

	const createSwipeTimeout = () => {
		return setTimeout(() => {
			if (currentIndex == images.length - 1) {
				moveSliderToIndex(0);
				return;
			}
			moveSliderToIndex(currentIndex + 1);
		}, autoplayDuration);
	};

	useEffect(() => {
		if (!autoplay || !images?.length) return;

		const timeout = createSwipeTimeout();

		return () => clearTimeout(timeout);
	}, [currentIndex]);

	return (
		<div className={styles.wrapper} style={{ width }}>
			<div
				data-testid={"slider"}
				ref={sliderRef as any}
				className={styles.slider}
				style={{ width: width * images.length }}
			>
				{images.map((i, index) => (
					<Image
						data-testid={`image_${index}`}
						key={index}
						src={i.src}
						alt={i.alt}
						width={width}
						height={height}
						draggable={false}
					/>
				))}
			</div>
			{images.length > 1 ? (
				<div className={styles.dotsWrapper}>
					{images?.map((i, index) => renderDot(index))}
				</div>
			) : null}
		</div>
	);
}
