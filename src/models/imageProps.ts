import { StorageReference } from "firebase/storage";

export interface ImageSrcProps {
	src: string;
	alt: string;
}

export interface ImageRefProps {
	storageRef: StorageReference;
	alt: string;
}
