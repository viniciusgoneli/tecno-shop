import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductDetailsCarousel.module.css";
import { ImageProps } from "@/types/imageProps";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import ArrowLeftIcon from "../../../public/icons/arrow-left.svg";
import ArrowRightIcon from "../../../public/icons/arrow-right.svg";

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
			<li key={index}>
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
				key={index}
				onClick={handleClick}
				className={`${styles.dot} ${selectedClass}`}
			/>
		);
	};

	const moveSliderToNextIndex = () => {
		if (currIndex == images.length - 1) return;

		setCurrIndex(currIndex + 1);
	};

	const moveSliderToPreviousIndex = () => {
		if (currIndex == 0) return;

		setCurrIndex(currIndex - 1);
	};

	const handlers = useSwipeable({
		onSwipedLeft: moveSliderToNextIndex,
		onSwipedRight: moveSliderToPreviousIndex,
	});

	return (
		<section {...handlers} className={styles.wrapper}>
			<ul
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
				<button onClick={moveSliderToPreviousIndex}>
					<Image
						width={20}
						height={20}
						src={ArrowLeftIcon}
						alt="Arrow left icon"
						style={{ fill: "#fff" }}
					/>
				</button>
				<button onClick={moveSliderToNextIndex}>
					<Image
						color="#fff"
						width={20}
						height={20}
						src={ArrowRightIcon}
						alt="Arrow right  icon"
						style={{ fill: "#fff" }}
					/>
				</button>
			</div>
		</section>
	);
}
