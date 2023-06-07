import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import HomeCard from "@/components/HomeCard";
import ProductCard from "@/components/ProductCard";

import Prod1Img from "../../public/images/product-1.jpg";
import Prod2Img from "../../public/images/product-2.jpg";
import Prod3Img from "../../public/images/product-3.jpg";
import Prod4Img from "../../public/images/product-4.jpg";
import { ImageProps } from "@/types/imageProps";
import FeaturedSection from "@/components/FeaturedSection";

const firstCardImgs = [
	{
		src: "/images/woman-with-white-dress.jpg",
		alt: "Woman wearing a white dress",
	},
	{
		src: "/images/woman-with-white-dress.jpg",
		alt: "Woman wearing a white dress",
	},
	{
		src: "/images/woman-with-white-dress.jpg",
		alt: "Woman wearing a white dress",
	},
] satisfies ImageProps[];

const secondCardImg = [
	{
		src: "/images/woman-with-red-dress.jpg",
		alt: "Woman wearing a red dress",
	},
] satisfies ImageProps[];

const thirdCardImg = [
	{
		src: "/images/woman-with-blue-dress.jpg",
		alt: "Woman wearing a blue dress",
	},
] satisfies ImageProps[];

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.homeSection}>
				<HomeCard
					carouselProps={{
						height: 193,
						images: firstCardImgs,
					}}
					width={291}
					title="parks and recreation"
					subtitle="shop new"
					style={{ marginBottom: 18 }}
				/>
				<HomeCard
					carouselProps={{
						height: 420,
						images: secondCardImg,
					}}
					width={291}
					title="learning in"
					subtitle="shop dresses"
					style={{ marginBottom: 18 }}
				/>
				<HomeCard
					carouselProps={{
						height: 420,
						images: thirdCardImg,
					}}
					width={291}
					title="all over velvet"
					subtitle="shop back-in-stock"
					style={{ marginBottom: 18 }}
				/>
			</section>
			<FeaturedSection style={{ marginBottom: 36 }} />
		</main>
	);
}
