import styles from "./page.module.css";
import React, { Suspense } from "react";
import HomeCard from "@/components/HomeCard";
import { ImageRefProps } from "@/types/imageProps";
import FeaturedSection from "@/components/FeaturedSection";
import { ref } from "firebase/storage";
import { convertImgRefToImgSrc, storage } from "@/services/firebase";

const getFirstCardImages = async () => {
	return await convertImgRefToImgSrc({
		ref: ref(storage, "headsets/test1/1.jpg"),
		alt: "Woman wearing a white dress",
	});
};

const getSecondCardImage = async () => {
	return await convertImgRefToImgSrc({
		ref: ref(storage, "headsets/test1/4.jpg"),
		alt: "Woman wearing a red dress",
	});
};

const getThirdCardImage = async () => {
	return await convertImgRefToImgSrc({
		ref: ref(storage, "headsets/test1/5.jpg"),
		alt: "Woman wearing a blue dress",
	});
};

export default async function Home() {
	const firstCardImgsPromise = getFirstCardImages();
	const secondCardImgPromise = getSecondCardImage();
	const thirdCardImgPromise = getThirdCardImage();

	return (
		<main className={styles.main}>
			<h2 className={styles.title}>DESTAQUES</h2>
			<section className={styles.topSection}>
				<HomeCard
					carouselProps={{
						autoplay: true,
					}}
					title="parks and recreation"
					subtitle="shop new"
					imagePromise={firstCardImgsPromise}
					style={{ marginBottom: 18 }}
				/>
				<HomeCard
					carouselProps={{
						autoplay: true,
					}}
					title="learning in"
					subtitle="shop dresses"
					imagePromise={secondCardImgPromise}
					style={{ marginBottom: 18 }}
				/>
				<HomeCard
					carouselProps={{
						autoplay: true,
					}}
					title="all over velvet"
					subtitle="shop back-in-stock"
					imagePromise={thirdCardImgPromise}
					style={{ marginBottom: 18 }}
				/>
			</section>
		</main>
	);
}
