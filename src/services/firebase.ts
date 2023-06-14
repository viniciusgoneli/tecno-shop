// Import the functions you need from the SDKs you need
import { ImageRefProps, ImageSrcProps } from "@/types/imageProps";
import { initializeApp } from "firebase/app";
import { StorageReference, getDownloadURL, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const storage = getStorage(firebase);
export const convertImgRefToImgSrc = async (imgRef: ImageRefProps) => {
    const url = await getDownloadURL(imgRef.ref);

    return { alt: imgRef.alt, src: url };
}