
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCn3KfrwX57NaBp7IWqrzDu_1bL_ARgvlo",
  authDomain: "quilmesurbanclothes.firebaseapp.com",
  projectId: "quilmesurbanclothes",
  storageBucket: "quilmesurbanclothes.appspot.com",
  messagingSenderId: "303202569920",
  appId: "1:303202569920:web:bca44b847c442005dc2725"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
return app
}