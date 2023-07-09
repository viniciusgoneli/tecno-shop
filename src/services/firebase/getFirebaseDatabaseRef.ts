import { Database, ref } from "firebase/database";

const getFirebaseDatabaseRef = (db: Database, path: string) => {
	return ref(db, path);
};

export default getFirebaseDatabaseRef;
