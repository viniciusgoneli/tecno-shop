import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductDetailsCarousel.module.css";
import { ImageProps } from "@/types/imageProps";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import ArrowIcon from "../SvgComponents/arrowIcon";

interface ProductDetailsCarouselProps {
	images: ImageProps[];
}

export default function ProductDetailsCarousel({
	images,
}: ProductDetailsCarouselProps) {
	const [currIndex, setCurrIndex] = useState(0);

	const sliderRef = useRef<HTMLUListElement>();

	const renderImage = (it: ImageProps, index: number) => {
		return (
			<li data-testid={`image_${index}`} key={index}>
				<Image
					{...it}
					fill
					style={{ objectFit: "contain" }}
					draggable={false}
				/>
			</li>
		);
	};

	const renderDot = (it: ImageProps, index: number) => {
		const handleClick = () => {
			setCurrIndex(index);
		};

		const selectedClass = index == currIndex ? styles.dotFill : "";

		return (
			<button
				data-testid={`dot_${index}`}
				key={index}
				onClick={handleClick}
				className={`${styles.dot} ${selectedClass}`}
			/>
		);
	};

	const moveSliderToNextIndex = () => {
		if (currIndex == images.length - 1) {
			setCurrIndex(0);
			return;
		}

		setCurrIndex(currIndex + 1);
	};

	const moveSliderToPreviousIndex = () => {
		if (currIndex == 0) {
			setCurrIndex(images.length - 1);
			return;
		}

		setCurrIndex(currIndex - 1);
	};

	const handlers = useSwipeable({
		onSwipedLeft: moveSliderToNextIndex,
		onSwipedRight: moveSliderToPreviousIndex,
	});

	return (
		<section {...handlers} className={styles.wrapper}>
			<ul
				data-testid="slider"
				ref={sliderRef as any}
				className={styles.slider}
				style={{
					width: `${images.length * 100}%`,
					transform: `translateX(-${
						currIndex * (100 / images.length)
					}%)`,
				}}
			>
				{images.map(renderImage)}
			</ul>
			<div className={styles.dotsWrapper}>
				{images.map(renderDot)}
			</div>
			<div className={styles.arrowsRow}>
				<button
					data-testid="previous-btn"
					onClick={moveSliderToPreviousIndex}
				>
					<ArrowIcon dir="left" fill="#fff" />
				</button>
				<button
					data-testid="next-btn"
					onClick={moveSliderToNextIndex}
				>
					<ArrowIcon dir="right" fill="#fff" />
				</button>
			</div>
		</section>
	);
}
