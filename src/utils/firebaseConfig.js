// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqZXCD-yasLhj3qTSi8GYltIJo8U6o2AU",
  authDomain: "uvanalisis.firebaseapp.com",
  projectId: "uvanalisis",
  storageBucket: "uvanalisis.appspot.com",
  messagingSenderId: "926609880378",
  appId: "1:926609880378:web:280dff39258a13e5874c03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
