import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm5NdbcuNwdgJ5h0O5T_J0OfatzEEfZVQ",
  authDomain: "foodboxd-ab81a.firebaseapp.com",
  projectId: "foodboxd-ab81a",
  storageBucket: "foodboxd-ab81a.appspot.com",
  messagingSenderId: "452247743691",
  appId: "1:452247743691:android:bd9fb0c9469ef440d8bf4e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
