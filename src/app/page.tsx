import styles from "./page.module.css";
import React from "react";
import HomeCard from "@/components/HomeCard";
import { ref } from "firebase/storage";
import {
	getFirebaseDatabase,
	getFirebaseStorage,
} from "@/services/firebase/firebase";
import ItemsSlider from "@/components/ItemsSlider";
import { ImageRefProps } from "@/models/imageProps";
import { orderByKey, query } from "firebase/database";
import getFirebaseDatabaseRef from "@/services/firebase/getFirebaseDatabaseRef";
import FeaturedSection from "@/components/FeaturedSection";

const storage = getFirebaseStorage();
const database = getFirebaseDatabase();

/*const image1 = {
	storageRef: ref(storage, "headsets/test1/1.jpg"),
	alt: "Woman wearing a white dress",
} satisfies ImageRefProps;

const image2 = {
	storageRef: ref(storage, "headsets/test1/2.jpg"),
	alt: "Woman wearing a red dress",
} satisfies ImageRefProps;

const image3 = {
	storageRef: ref(storage, "headsets/test1/3.jpg"),
	alt: "Woman wearing a blue dress",
} satisfies ImageRefProps;*/

export default function Home() {
	return (
		<main className={styles.main}>
			<FeaturedSection />
		</main>
	);
}
