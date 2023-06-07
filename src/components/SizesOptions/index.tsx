import React, { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./SizesOptions.module.css";

export interface SizeProps {
	id: number;
	value: number;
}

interface SizesOptionsProps {
	sizes: SizeProps[];
}

export default forwardRef((props: SizesOptionsProps, ref) => {
	const [selectedOption, setSelectedOption] = useState<SizeProps>();

	const getValue = () => {
		return selectedOption?.value;
	};

	useImperativeHandle(
		ref,
		() => ({
			getValue,
		}),
		[selectedOption]
	);

	const renderOption = (it: SizeProps, index: number) => {
		const handleSelectOption = () => {
			setSelectedOption(it);
		};

		const selectedClass =
			selectedOption?.id === it.id ? styles.optionSelected : "";

		return (
			<button
				onClick={handleSelectOption}
				className={`${styles.option} ${selectedClass}`}
				key={it.id}
			>
				<strong>{it.value}</strong>
			</button>
		);
	};

	return (
		<div className={styles.wrapper}>
			{props.sizes?.map(renderOption)}
		</div>
	);
});
