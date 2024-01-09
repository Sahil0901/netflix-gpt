// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdy-FGq0NypwLWaX0Sm2faCWnAZ_lLnfI",
  authDomain: "netflixgpt-a6a60.firebaseapp.com",
  projectId: "netflixgpt-a6a60",
  storageBucket: "netflixgpt-a6a60.appspot.com",
  messagingSenderId: "348455488442",
  appId: "1:348455488442:web:7a9fb65955c971c9272b83",
  measurementId: "G-FP01L3QL3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();