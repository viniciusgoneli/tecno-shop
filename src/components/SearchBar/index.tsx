"use client;";

import React, {
	ChangeEvent,
	forwardRef,
	useImperativeHandle,
	useState,
} from "react";
import SearchIcon from "../../../public/svg/search-icon.svg";
import Image from "next/image";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
	value: string;
	onChangeValue: (value: string) => void;
}

export default function SearchBar({ value, onChangeValue }: SearchBarProps) {
	const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		onChangeValue(value);
	};

	return (
		<div className={styles.wrapper}>
			<input
				value={value}
				onChange={handleChangeText}
				type="text"
				placeholder="ex: placa de vídeo"
			/>
			<button>
				<Image
					src={SearchIcon}
					alt="Ícone de pesquisa em forma de lupa."
					fill
				/>
			</button>
		</div>
	);
}
