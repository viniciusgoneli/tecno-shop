import { StorageReference } from "firebase/storage";

export interface ImageSrcProps {
	src: string;
	alt: string;
}

export interface ImageRefProps {
	ref: StorageReference;
	alt: string;
}