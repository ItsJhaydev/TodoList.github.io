// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQumUEMkkGSriceJC05V6Rl3TozwxWDrY",
  authDomain: "todolist-86d28.firebaseapp.com",
  projectId: "todolist-86d28",
  storageBucket: "todolist-86d28.appspot.com",
  messagingSenderId: "126815443492",
  appId: "1:126815443492:web:0d0ce49855211d9c7196b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)