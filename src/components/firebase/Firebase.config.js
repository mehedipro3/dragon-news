// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC2NHh-z_rSAKb1z5tDktU8bqmINf7C3Q",
  authDomain: "dragon-news-49585.firebaseapp.com",
  projectId: "dragon-news-49585",
  storageBucket: "dragon-news-49585.firebasestorage.app",
  messagingSenderId: "623037028781",
  appId: "1:623037028781:web:04a466887c1371d2e16924",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;