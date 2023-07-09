import { FirebaseStorage, ref } from "firebase/storage";

const getFirebaseStorageRef = (storage: FirebaseStorage, path: string) => {
	return ref(storage, path);
};

export default getFirebaseStorageRef;
