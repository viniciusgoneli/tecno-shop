"use client";

import React from "react";
import "../styles/globals.css";
import CartProvider from "@/contexts/CartContextProvider";
import ScrollProvider from "@/contexts/ScrollContextProvider";
import LayoutContent from "./LayoutContent";
import StyledComponentsRegistry from "./registry";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<StyledComponentsRegistry>
			<CartProvider>
				<ScrollProvider>
					<LayoutContent>{children}</LayoutContent>
				</ScrollProvider>
			</CartProvider>
		</StyledComponentsRegistry>
	);
}
