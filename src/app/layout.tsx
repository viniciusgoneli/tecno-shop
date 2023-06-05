import React, { useRef } from "react";
import "../styles/globals.css";
import Header from "../components/Header";
import AsideMenu from "@/components/AsideMenu";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<HeaderWrapper />
				{children}
				<Footer />
			</body>
		</html>
	);
}
