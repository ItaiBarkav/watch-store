// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDmjo9KlGgi9LL8lZ3fIMWlPgdLbgK4xI",
  authDomain: "watchstore-8e275.firebaseapp.com",
  projectId: "watchstore-8e275",
  storageBucket: "watchstore-8e275.firebasestorage.app",
  messagingSenderId: "1041905793969",
  appId: "1:1041905793969:web:79dc760fb656207b279b90",
  measurementId: "G-L5D6Z9B53H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
