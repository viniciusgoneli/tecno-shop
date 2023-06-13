import React from "react";
import { IconProps } from "@/types/svgProps";

export default function BagIcon({
	width = 24,
	height = 24,
	fill = "#000",
	style,
}: IconProps) {
	return (
		<div style={style}>
			<svg
				width={width}
				height={height}
				viewBox="0 0 18 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="0.7"
					y="-0.7"
					width="10.6"
					height="11.6"
					rx="3.3"
					transform="matrix(1 0 0 -1 3 11.6)"
					stroke={fill}
					stroke-width="1.4"
				/>
				<rect y="5" width="18" height="17" fill={fill} />
			</svg>
		</div>
	);
}
