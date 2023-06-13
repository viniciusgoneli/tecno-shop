import React, { CSSProperties, useMemo } from "react";
import { IconProps } from "@/types/svgProps";

export type ArrowDir = "up" | "right" | "down" | "left";

interface ArrowIcon extends IconProps {
	dir?: ArrowDir;
}

export default function ArrowIcon({
	width = 24,
	height = 24,
	fill = "#000",
	style,
	dir = "up",
}: ArrowIcon) {
	const rotateDeg = useMemo(
		() =>
			dir === "up"
				? "-90deg"
				: dir === "right"
				? "0deg"
				: dir === "down"
				? "90deg"
				: "180deg",
		[dir]
	);

	const defaultStyle = {
		width,
		height,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transform: `rotate(${rotateDeg})`,
	} satisfies CSSProperties;

	return (
		<div
			style={{
				...defaultStyle,
				...style,
			}}
		>
			<svg
				width={width}
				height={height}
				viewBox="0 0 49 80"
				fill={fill}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.519531 8.48L32.0395 40L0.519531 71.52L8.99953 80L48.9995 40L8.99953 0L0.519531 8.48Z"
					fill={fill}
				/>
			</svg>
		</div>
	);
}
