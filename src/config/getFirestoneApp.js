// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn3KfrwX57NaBp7IWqrzDu_1bL_ARgvlo",
  authDomain: "quilmesurbanclothes.firebaseapp.com",
  projectId: "quilmesurbanclothes",
  storageBucket: "quilmesurbanclothes.appspot.com",
  messagingSenderId: "303202569920",
  appId: "1:303202569920:web:bca44b847c442005dc2725"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const getFirestoneApp = () => {
     return app
 }