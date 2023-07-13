import React, {
	forwardRef,
	useContext,
	useImperativeHandle,
	useState,
} from "react";
import styles from "./CartModal.module.css";
import { ScrollContext } from "@/contexts/ScrollContextProvider";
import { CartContext } from "@/contexts/CartContextProvider";
import OrderItemCard from "../OrderItemCard";
import { useRouter } from "next/navigation";
import { OrderItem } from "@/models/orderItem";

export interface CartModalRef {
	open: () => void;
	close: () => void;
}

export default forwardRef((props, ref) => {
	const { setScrollEnabled } = useContext(ScrollContext);
	const { orderItems, getTotalPrice, removeOrderItem } =
		useContext(CartContext);

	const [visible, setVisible] = useState(false);

	const router = useRouter();

	const open = () => {
		setScrollEnabled(false);
		setVisible(true);
	};

	const close = () => {
		setScrollEnabled(true);
		setVisible(false);
	};

	useImperativeHandle(
		ref,
		() => ({
			open,
			close,
		}),
		[]
	);

	if (!visible) return <></>;

	const handleClickOrderItem = (item: OrderItem) => {
		close();
		router.push(`product/${item.productId}`);
	};

	const handleClickTrashButton = (item: OrderItem) => {
		removeOrderItem(item.productId);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.darkLayer} onClick={close} />
			<div className={styles.arrowWrapper}>
				<div />
			</div>
			<section className={styles.content}>
				<h2>Seu carrinho ( {orderItems.length} ):</h2>
				<ul>
					{orderItems?.map((it, index) => (
						<li key={it.productId}>
							<OrderItemCard
								item={it}
								onClick={handleClickOrderItem}
								onClickTrashButton={
									handleClickTrashButton
								}
							/>
						</li>
					))}
				</ul>
				<div className={styles.details}>
					<div className={styles.row}>
						<h3>Total:</h3>
						<strong>
							R${getTotalPrice().toFixed(2)}
						</strong>
					</div>
					<div className={styles.row}>
						<p>Frete</p>
						<p>Grátis</p>
					</div>
					<a className={styles.seeCartBtn}>
						<strong>Ver carrinho</strong>
					</a>
					<a className={styles.checkoutBtn}>
						<strong>Efetuar pedido</strong>
					</a>
				</div>
			</section>
		</div>
	);
});
