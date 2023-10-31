// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA8tIa1Aupkku6lUgw5ULwH2S4zmNJpoFw",
  authDomain: "auth-app-8932a.firebaseapp.com",
  projectId: "auth-app-8932a",
  storageBucket: "auth-app-8932a.appspot.com",
  messagingSenderId: "955282027756",
  appId: "1:955282027756:web:86b08cdf2454a037dd21c9",
  measurementId: "G-ZV3RPMS5VT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};
