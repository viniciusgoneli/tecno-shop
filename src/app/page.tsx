import styles from "./page.module.css";
import React from "react";
import HomeCard from "@/components/HomeCard";
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
						autoplay: true,
					}}
					title="parks and recreation"
					subtitle="shop new"
					images={firstCardImgs}
					style={{ marginBottom: 18 }}
				/>
				<HomeCard
					carouselProps={{
						autoplay: true,
					}}
					title="learning in"
					subtitle="shop dresses"
					images={secondCardImg}
					style={{ marginBottom: 18 }}
				/>
				<HomeCard
					carouselProps={{
						autoplay: true,
					}}
					title="all over velvet"
					subtitle="shop back-in-stock"
					images={thirdCardImg}
					style={{ marginBottom: 18 }}
				/>
			</section>
			<FeaturedSection style={{ marginBottom: 36 }} />
		</main>
	);
}
