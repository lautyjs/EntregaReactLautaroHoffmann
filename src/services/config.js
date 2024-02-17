// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApVSZLQs3r1pPjK_2nRxDCmrThWsNJKoc",
  authDomain: "proyecto-react-dcea0.firebaseapp.com",
  projectId: "proyecto-react-dcea0",
  storageBucket: "proyecto-react-dcea0.appspot.com",
  messagingSenderId: "206171151827",
  appId: "1:206171151827:web:130f494f9c443f2be52326",
  measurementId: "G-M82LXG1927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)