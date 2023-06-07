import React, { DetailedHTMLProps } from "react";
import styles from "./Button.module.css";

interface ButtonProps
	extends DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	label: string;
}

export default function Button(props: ButtonProps) {
	return (
		<button {...props} className={styles.wrapper}>
			<strong>{props.label}</strong>
		</button>
	);
}
