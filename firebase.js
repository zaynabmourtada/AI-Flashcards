import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSfg5uWjOhOSIzzyT4ifsC-Arr5k3AzxQ",
  authDomain: "ai-flashcards-4d99d.firebaseapp.com",
  projectId: "ai-flashcards-4d99d",
  storageBucket: "ai-flashcards-4d99d.appspot.com",
  messagingSenderId: "78231470074",
  appId: "1:78231470074:web:ba4f5082e129f3595bee43"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;