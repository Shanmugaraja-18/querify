import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWagid5Dc8BTJAz08JzdhGBIBR8dyTJv0",
  authDomain: "socialmedia-796de.firebaseapp.com",
  projectId: "socialmedia-796de",
  storageBucket: "socialmedia-796de.appspot.com",
  messagingSenderId: "374136366004",
  appId: "1:374136366004:web:a4bb94c439213ef806c8e1",
  measurementId: "G-DX69NXM1SF"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
