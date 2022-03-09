// Import the functions you need from the SDKs you need
// import { async } from "@firebase/util";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTiwa9ogfvpRe8SRp9L1BERBYlm4WM_Qg",
  authDomain: "website-admin-lomdei.firebaseapp.com",
  projectId: "website-admin-lomdei",
  storageBucket: "website-admin-lomdei.appspot.com",
  messagingSenderId: "1054106630383",
  appId: "1:1054106630383:web:6a351681775bf73240c31a",
  measurementId: "G-ZP7YRB4EC8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();



