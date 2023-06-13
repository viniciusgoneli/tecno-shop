"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import SizesOptions from "@/components/SizesOptions";
import BoxIcon from "../../../../public/svg/box.svg";
import Button from "@/components/Button";
import FeaturedSection from "@/components/FeaturedSection";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";

export default function ProductPage() {
	const params = useParams();

	return (
		<main className={styles.main}>
			<ProductDetailsCarousel
				images={[
					{
						src: "/images/woman-with-red-dress.jpg",
						alt: "",
					},
					{
						src: "/images/woman-with-red-dress.jpg",
						alt: "",
					},
					{
						src: "/images/woman-with-red-dress.jpg",
						alt: "",
					},
				]}
			/>
			<section className={styles.details}>
				<h2>
					Elouise Striped Knit&nbsp;&nbsp;
					<strong>$102</strong>
				</h2>
				<section className={styles.sizesSection}>
					<h3>
						Size <span>*</span>
					</h3>
					<SizesOptions
						sizes={[
							{ id: 1, value: 24 },
							{ id: 2, value: 26 },
							{ id: 3, value: 28 },
							{ id: 4, value: 30 },
							{ id: 5, value: 24 },
							{ id: 6, value: 26 },
							{ id: 7, value: 28 },
							{ id: 8, value: 30 },
							{ id: 9, value: 24 },
							{ id: 10, value: 26 },
							{ id: 11, value: 28 },
							{ id: 12, value: 30 },
							{ id: 13, value: 24 },
							{ id: 14, value: 26 },
							{ id: 15, value: 28 },
							{ id: 16, value: 30 },
						]}
					/>
					<div className={styles.row}>
						<Image
							src={BoxIcon}
							width={16}
							height={16}
							alt="Box icon"
						/>
						<p className={styles.freeShipping}>
							Free Shipping On All U.S. Orders
							details
						</p>
					</div>
					<Button label="Add To Bag" />
				</section>
				<section className={styles.descriptionWrapper}>
					<p>
						High waist pants from J.O.A. with cropped
						wide legs, pleating on the front, and a
						built-in sash tie on the side. Vertical
						striped pattern. Pleated trim at waist.
						Slash pockets at hip.
						<br />
						<br />
						• Polyester
						<br />
						• Imported
						<br />
						• Wash cold, dry flat
						<br />
						<br />
						Color: Stripe
						<br />
						Feel: Medium weight silky weave, raised
						stripe texture
					</p>
				</section>
				<FeaturedSection style={{ marginBottom: 36 }} />
			</section>
		</main>
	);
}
