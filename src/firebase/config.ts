// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// get config obj here https://console.firebase.google.com/u/0/project/floorballstatsde/settings/general/web:ZTkxNjliZjItYjY1OS00ZDYwLWI3OTAtZTgxYjEyZDI2NDk4

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export {db}