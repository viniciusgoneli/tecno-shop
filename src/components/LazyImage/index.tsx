import { ImageSrcProps } from "@/types/imageProps";
import Image, { ImageProps } from "next/image";
import React from "react";

interface LazyImageProps extends Omit<ImageProps, "src" | "alt"> {
	imagePromise: Promise<ImageSrcProps>;
}

export default async function LazyImage(props: LazyImageProps) {
	const image = await props.imagePromise;

	return <Image {...props} {...image} />;
}
