// Import the functions you need from the SDKs you need
import { ImageRefProps, ImageSrcProps } from "@/models/imageProps";
import { initializeApp } from "firebase/app";
import {
	connectStorageEmulator,
	getDownloadURL,
	getStorage,
} from "firebase/storage";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import config from "../../firebase.json";

const firebaseCredentials = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const firebase = initializeApp(firebaseCredentials);

export const getFirebaseStorage = () => {
	const stg = getStorage(firebase);

	const port = config.emulators.storage.port;
	connectStorageEmulator(stg, "localhost", port);

	return stg;
};

export const getFirebaseDatabase = () => {
	const db = getDatabase(firebase);

	const port = config.emulators.database.port;
	connectDatabaseEmulator(db, "localhost", port);

	return db;
};
