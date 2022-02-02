// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyt3k2BzoM2Oav67VHJh38Dbtp3T0Vn_4",
  authDomain: "petsy-83eb2.firebaseapp.com",
  projectId: "petsy-83eb2",
  storageBucket: "petsy-83eb2.appspot.com",
  messagingSenderId: "532767807611",
  appId: "1:532767807611:web:27e9f43aff9486ae14aade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);