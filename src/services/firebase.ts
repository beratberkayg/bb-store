// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZjhWWV7MYivdTcyIQGo4_sshr9vfkd2c",
  authDomain: "bb-shop-1ac39.firebaseapp.com",
  projectId: "bb-shop-1ac39",
  storageBucket: "bb-shop-1ac39.appspot.com",
  messagingSenderId: "716668860808",
  appId: "1:716668860808:web:3ed102c3429a03b233623d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
