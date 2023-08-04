import React, { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./CookiesConsent.module.css";
import Cookies from "js-cookie";
import moment from "moment";
import { cookiePermissionKey } from "@/utils/constants";

export interface CookiesModalRef {
	open: () => void;
	close: () => void;
}

export default forwardRef((props, ref) => {
	const [visible, setVisible] = useState(false);

	const open = () => {
		setVisible(true);
	};

	const close = () => {
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

	const handleClickAllowButton = () => {
		Cookies.set(cookiePermissionKey, "allowed");

		close();
	};

	const handleClickDenyButton = () => {
		const expirationDate = moment().add(1, "day").toDate();
		Cookies.set(cookiePermissionKey, "denied", {
			expires: expirationDate,
		});

		close();
	};

	return (
		<div className={styles.wrapper}>
			<h2>
				Esse site utiliza cookies para armazenar sua sessão e
				suas preferências de compra.
			</h2>
			<p>Você deseja permitir cookies nesse site?</p>
			<div className={styles.btns}>
				<button onClick={handleClickDenyButton}>
					<p>Negar</p>
				</button>
				<button onClick={handleClickAllowButton}>
					<p>Permitir</p>
				</button>
			</div>
		</div>
	);
});
