"use client";

import React, { CSSProperties, useContext, useMemo, useState } from "react";
import { CartContext } from "@/contexts/CartContextProvider";
import { OrderItem } from "@/models/orderItem";
import styles from "./AddToCartButton.module.css";
import { NotificationsContext } from "@/contexts/NotificationsContextProvider";

interface AddToCartButtonProps {
	productJson: string;
	quantity: number;
	label: string;
	style?: CSSProperties;
}

export default function AddToCartButton({
	productJson,
	quantity,
	label = "+ Carrinho",
	style,
}: AddToCartButtonProps) {
	const { showNotificationPopup } = useContext(NotificationsContext);
	const { setOrderItem, removeOrderItem, getOrderItem } =
		useContext(CartContext);

	const product = useMemo(() => JSON.parse(productJson), [productJson]);

	const handleClick = async () => {
		addNewItemToCart();
		showNotificationPopup({
			title: "Item adicionado!",
			message: "Você adicionou um novo item ao seu carrinho",
		});
	};

	const addNewItemToCart = () => {
		const storedOrderItem = getOrderItem(product.id);

		if (storedOrderItem) {
			storedOrderItem.quantity += quantity;
			setOrderItem(storedOrderItem);
			return;
		}

		const orderItem = OrderItem.createUsingProductAndQuantity(
			product,
			quantity
		);

		setOrderItem(orderItem);
	};

	return (
		<button
			className={`${styles.wrapper}`}
			onClick={handleClick}
			style={style}
		>
			<strong>{label}</strong>
		</button>
	);
}
