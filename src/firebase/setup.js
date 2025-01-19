
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD5c2LqXMYCsq5d00xwgASBby5owM8x7NE",
  authDomain: "clone-3e9c5.firebaseapp.com",
  projectId: "clone-3e9c5",
  storageBucket: "clone-3e9c5.firebasestorage.app",
  messagingSenderId: "212096299877",
  appId: "1:212096299877:web:b7da7848621720306d278c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app)