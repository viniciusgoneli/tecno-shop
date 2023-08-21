import styles from "./page.module.css";
import React from "react";
import FeaturedSection from "@/components/FeaturedSection";
import CategoriesSection from "@/components/CategoriesSection";
import { Container } from "./pageStyle";

export default function Home() {
	return (
		<Container>
			<FeaturedSection style={{ marginBottom: 20 }} />
			<CategoriesSection />
		</Container>
	);
}
