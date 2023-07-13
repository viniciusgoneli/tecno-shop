"use client";

import React, { CSSProperties, useContext, useState } from "react";
import styles from "./OrderItemCard.module.css";
import Image from "next/image";
import { OrderItem } from "@/models/orderItem";
import TrashIcon from "../../../public/svg/trash.svg";
import { useRouter } from "next/navigation";
import { CartContext } from "@/contexts/CartContextProvider";

interface OrderItemCardProps {
	item: OrderItem;
	onClick: (item: OrderItem) => void;
	onClickTrashButton: (item: OrderItem) => void;
	style?: CSSProperties;
}

export default function OrderItemCard({
	item,
	onClick,
	onClickTrashButton,
	style,
}: OrderItemCardProps) {
	const { setOrderItem } = useContext(CartContext);

	const handleClickPlusBtn = () => {
		item.quantity++;
		setOrderItem(item);
	};

	const handleClickMinusBtn = () => {
		if (item.quantity == 1) return;

		item.quantity--;
		setOrderItem(item);
	};

	const handleClickProduct = () => {
		onClick(item);
	};

	const handleClickTrashButton = () => {
		onClickTrashButton(item);
	};

	return (
		<section style={style} className={styles.wrapper}>
			<div className={styles.imgWrapper}>
				<Image {...item?.productImg} fill />
			</div>
			<div className={styles.content}>
				<a onClick={handleClickProduct}>
					<h3>{item?.productName}</h3>
				</a>
				<p>Preço unitário: R${item?.unitPrice}</p>
				<p>Quantidade: {item?.quantity}</p>
				<p>
					Subtotal: R$
					{(item?.quantity * item?.unitPrice).toFixed(2)}
				</p>
				<div className={styles.btns}>
					<div className={styles.qttBtns}>
						<button onClick={handleClickMinusBtn}>
							<span>-</span>
						</button>
						<button onClick={handleClickPlusBtn}>
							<span>+</span>
						</button>
					</div>
					<button onClick={handleClickTrashButton}>
						<Image
							width={20}
							height={20}
							src={TrashIcon}
							alt="Trash icon"
						/>
					</button>
				</div>
			</div>
		</section>
	);
}
