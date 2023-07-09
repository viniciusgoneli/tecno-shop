"use client";

import React from "react";
import "../styles/globals.css";
import CartProvider from "@/contexts/CartContextProvider";
import ScrollProvider from "@/contexts/ScrollContextProvider";
import LayoutContent from "./LayoutContent";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CartProvider>
			<ScrollProvider>
				<LayoutContent>{children}</LayoutContent>
			</ScrollProvider>
		</CartProvider>
	);
}
