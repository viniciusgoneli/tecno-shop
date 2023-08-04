import React, { useEffect, useMemo, useState } from "react";
import styles from "./page.module.css";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import SizesOptions from "@/components/SizesOptions";
import BoxIcon from "../../../../public/svg/box.svg";
import Button from "@/components/BlackButton";
import FeaturedSection from "@/components/FeaturedSection";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import { FileNameImageProps, ImageSrcProps } from "@/models/imageProps";
import {
	child,
	equalTo,
	get,
	onValue,
	orderByChild,
	orderByKey,
} from "firebase/database";
import {
	getFirebaseDatabase,
	getFirebaseStorage,
	getFirestoreDatabase,
} from "@/services/firebase/firebase";
import getFirebaseDatabaseRef from "@/services/firebase/getFirebaseDatabaseRef";
import { convertJsonToArray, formatPrice } from "@/utils/functions";
import getFirebaseStorageRef from "@/services/firebase/getFirebaseStorageRef";
import { getDownloadURL } from "firebase/storage";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	startAt,
	where,
} from "firebase/firestore";
import AddToCartButton from "@/components/AddToCartButton/indext";
import { Product, ProductImage } from "@/models/product";

const db = getFirestoreDatabase();

interface ProductPageProps {
	params: Params;
}

const getProduct = async (prodId: string) => {
	const prodRef = doc(db, `products`, prodId);

	const prodDoc = await getDoc(prodRef);

	const prod = prodDoc.data() as Product;
	prod.id = prodDoc.id;

	return prod;
};

const getProductImages = async (prodId: string) => {
	const prodImgsRef = collection(db, `product-images`);

	const q = query(
		prodImgsRef,
		where("productId", "==", prodId),
		orderBy("position"),
		startAt(1)
	);
	const imgsDocs = (await getDocs(q))?.docs;

	const images = imgsDocs.map((doc) => {
		return doc.data();
	}) as ProductImage[];

	return images;
};

export default async function ProductPage({ params }: ProductPageProps) {
	const prodPromise = getProduct(params?.id);
	const prodImagesPromise = getProductImages(params?.id);

	const formatDescription = (description: string) => {
		const regex = /(?<=:)([^:]+)/g;
		const matches = description.match(regex);

		return matches?.toString();
	};

	const [prod, images] = await Promise.all([
		prodPromise,
		prodImagesPromise,
	]);

	return (
		<main className={styles.main}>
			<ProductDetailsCarousel images={images} />
			<section className={styles.details}>
				<h2>{prod?.name}</h2>
				<strong>{formatPrice(prod?.price)}</strong>
				<section className={styles.sizesSection}>
					<div className={styles.row}>
						<Image
							src={BoxIcon}
							width={16}
							height={16}
							alt="Box icon"
						/>
						<p className={styles.freeShipping}>
							Free grátis para todo o Brasil
						</p>
					</div>
					<AddToCartButton
						productJson={JSON.stringify(prod)}
						quantity={1}
					/>
				</section>
				<section className={styles.descriptionWrapper}>
					<p>{prod?.techInfo}</p>
				</section>
			</section>
		</main>
	);
}
