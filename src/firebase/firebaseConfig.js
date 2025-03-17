import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWxLQr39eh5MHa4xDfHCPIOqBLHS8VqIA",
  authDomain: "mpmarketing-df84b.firebaseapp.com",
  projectId: "mpmarketing-df84b",
  storageBucket: "mpmarketing-df84b.firebasestorage.app",
  messagingSenderId: "889911028393",
  appId: "1:889911028393:web:7cb19e37c9cc98f4a197b8",
  measurementId: "G-SD990VYQG4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
