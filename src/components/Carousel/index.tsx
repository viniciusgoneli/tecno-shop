"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import { ImageProps } from "@/types/imageProps";
import { useSwipeable } from "react-swipeable";

export interface CarouselProps {
	images: ImageProps[];
	autoplay?: boolean;
	autoplayDuration?: number;
}

export default function CardCarousel({
	images,
	autoplay,
	autoplayDuration = 1500,
}: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const sliderRef = useRef<HTMLDivElement>();

	const renderDot = (index: number) => {
		const handleClickDot = () => {
			setCurrentIndex(index);
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

	const createSwipeTimeout = () => {
		return setTimeout(() => {
			moveSliderToNextIndex();
		}, autoplayDuration);
	};

	const moveSliderToNextIndex = () => {
		if (currentIndex == images.length - 1) {
			setCurrentIndex(0);
			return;
		}

		setCurrentIndex(currentIndex + 1);
	};

	const moveSliderToPreviousIndex = () => {
		if (currentIndex == 0) {
			setCurrentIndex(images.length - 1);
			return;
		}

		setCurrentIndex(currentIndex - 1);
	};

	const handlers = useSwipeable({
		onSwipedLeft: moveSliderToNextIndex,
		onSwipedRight: moveSliderToPreviousIndex,
	});

	useEffect(() => {
		if (!autoplay || !images?.length) return;

		const timeout = createSwipeTimeout();

		return () => clearTimeout(timeout);
	}, [currentIndex]);

	return (
		<div {...handlers} className={styles.wrapper}>
			<ul
				data-testid={"slider"}
				ref={sliderRef as any}
				className={styles.slider}
				style={{
					width: `${100 * images.length}%`,
					transform: `translateX(-${
						currentIndex * (100 / images.length)
					}%)`,
				}}
			>
				{images.map((i, index) => (
					<li key={index}>
						<Image
							data-testid={`image_${index}`}
							src={i.src}
							alt={i.alt}
							fill
							draggable={false}
						/>
					</li>
				))}
			</ul>
			{images.length > 1 ? (
				<div className={styles.dotsWrapper}>
					{images?.map((i, index) => renderDot(index))}
				</div>
			) : null}
		</div>
	);
}
