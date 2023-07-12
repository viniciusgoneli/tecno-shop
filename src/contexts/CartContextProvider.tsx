"use client";

import { OrderItem } from "@/models/orderItem";
import { cartCookieKey, cartStorageKey } from "@/utils/constants";
import { getCookie, setCookie } from "@/utils/cookies";
import React, { createContext, useEffect, useState } from "react";

interface CartContextProps {
	children: React.ReactNode;
}

interface CartContextDataProps {
	orderItems: OrderItem[];
	setOrderItem: (item: OrderItem) => void;
	getTotalPrice: () => number;
	removeOrderItem: (productId: string) => void;
	getOrderItem: (productId: string) => OrderItem | undefined;
}

export const CartContext = createContext({} as CartContextDataProps);

export default function CartProvider({ children }: CartContextProps) {
	const [orderItems, setOrderItems] = useState<Map<string, OrderItem>>(
		new Map<string, OrderItem>([])
	);

	const setOrderItem = (orderItem: OrderItem) => {
		const { productId } = orderItem;

		orderItems.set(productId, orderItem);

		const newOrderItems = new Map<string, OrderItem>(orderItems);

		setOrderItems(newOrderItems);

		localStorage.setItem(
			cartStorageKey,
			JSON.stringify({ data: Array.from(newOrderItems.values()) })
		);
	};

	const loadStoredOrderItems = () => {
		const updatedOrderItems = new Map<string, OrderItem>([]);

		const json = localStorage.getItem(cartStorageKey);

		if (!json) return;
		console.log("ITEMS: " + json);

		const items = JSON.parse(json)?.data as OrderItem[];

		if (!items?.length) return;

		for (const it of items) {
			updatedOrderItems.set(it.productId, it);
		}

		setOrderItems(updatedOrderItems);
	};

	const getTotalPrice = () => {
		let sum = 0.0;
		for (const it of Array.from(orderItems.values())) {
			sum += it.unitPrice * it.quantity;
		}

		return sum;
	};

	const getOrderItem = (productId: string) => {
		return orderItems.get(productId);
	};

	const removeOrderItem = (productId: string) => {
		const updatedOrderItems = new Map<string, OrderItem>(orderItems);
		updatedOrderItems.delete(productId);

		setOrderItems(updatedOrderItems);

		localStorage.setItem(
			cartStorageKey,
			JSON.stringify({
				data: Array.from(updatedOrderItems.values()),
			})
		);
	};

	useEffect(() => {
		loadStoredOrderItems();
	}, []);

	const data = {
		orderItems: Array.from(orderItems.values()),
		setOrderItem,
		getTotalPrice,
		removeOrderItem,
		getOrderItem,
	} satisfies CartContextDataProps;

	return (
		<CartContext.Provider value={data}>{children}</CartContext.Provider>
	);
}
