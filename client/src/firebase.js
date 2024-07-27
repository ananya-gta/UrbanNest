// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urbannest-cdce8.firebaseapp.com",
  projectId: "urbannest-cdce8",
  storageBucket: "urbannest-cdce8.appspot.com",
  messagingSenderId: "242116623976",
  appId: "1:242116623976:web:bc57d4cf4a37b92ae885dd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
