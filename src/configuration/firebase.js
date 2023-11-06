// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf5LOhiNAPUa8btetY_r7tSpeaccK5pe8",
  authDomain: "finalproject-af759.firebaseapp.com",
  projectId: "finalproject-af759",
  storageBucket: "finalproject-af759.appspot.com",
  messagingSenderId: "504558923792",
  appId: "1:504558923792:web:3350c7090f4123e63cda95",
  measurementId: "G-CZS492QNMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
