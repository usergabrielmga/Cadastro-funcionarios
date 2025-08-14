import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv9E3oq620XQ5N2FLWoUxsNa4Bk26Qx-s",
  authDomain: "cadastro-funcionarios-db.firebaseapp.com",
  projectId: "cadastro-funcionarios-db",
  storageBucket: "cadastro-funcionarios-db.firebasestorage.app",
  messagingSenderId: "774209116273",
  appId: "G-8F46VW583F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);