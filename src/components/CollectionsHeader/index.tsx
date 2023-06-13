import React, { CSSProperties } from "react";
import styles from "./CollectionsHeader.module.css";
import ArrowIcon from "../SvgComponents/arrowIcon";
import Link from "next/link";

interface CollectionsHeaderProps {
	style?: CSSProperties;
}

export default function CollectionsHeader({ style }: CollectionsHeaderProps) {
	return (
		<div style={style} className={styles.wrapper}>
			<div className={styles.routesRow}>
				<Link href={"/"}>Home</Link>
				<p>Clothing</p>
			</div>
			<button className={styles.sortBtn}>
				<p>Sort By</p>
				<ArrowIcon
					width={8}
					height={8}
					dir="down"
					fill="#B0B0B0"
				/>
			</button>
		</div>
	);
}
