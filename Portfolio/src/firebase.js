
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN0lVrR9oqeQnyziUcRn_bjZq4zig-4SU",
  authDomain: "port2-80ba8.firebaseapp.com",
  databaseURL: "https://port2-80ba8-default-rtdb.firebaseio.com",
  projectId: "port2-80ba8",
  storageBucket: "port2-80ba8.appspot.com",
  messagingSenderId: "727452958946",
  appId: "1:727452958946:web:c08e911a62fff4aa369ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);