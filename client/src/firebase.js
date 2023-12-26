// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dreamzone-e8568.firebaseapp.com",
  projectId: "dreamzone-e8568",
  storageBucket: "dreamzone-e8568.appspot.com",
  messagingSenderId: "68922155940",
  appId: "1:68922155940:web:a6d53b974416c5b7809731"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);