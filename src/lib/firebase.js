
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjvN0L1cfSiJDqf_2sjCNzSmNevK3XTss",
  authDomain: "todoapp-bf003.firebaseapp.com",
  projectId: "todoapp-bf003",
  storageBucket: "todoapp-bf003.appspot.com",
  messagingSenderId: "1098108674156",
  appId: "1:1098108674156:web:91585be06cc1dfb44ab849"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);