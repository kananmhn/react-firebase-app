// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Viy3M421CZEs31wCnxE2rDJrN7Me1HI",
  authDomain: "react-data-sample.firebaseapp.com",
  projectId: "react-data-sample",
  storageBucket: "react-data-sample.appspot.com",
  messagingSenderId: "1006241444729",
  appId: "1:1006241444729:web:a9c6acd5c4416cd45ff5a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;

const db = getFirestore();
export { db };

