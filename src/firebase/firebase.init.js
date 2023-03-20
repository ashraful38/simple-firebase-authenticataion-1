// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpPhEwtRPpGEzupwRF64wB9Gqs89-t3Hw",
  authDomain: "simple-firebase-authenti-70c02.firebaseapp.com",
  projectId: "simple-firebase-authenti-70c02",
  storageBucket: "simple-firebase-authenti-70c02.appspot.com",
  messagingSenderId: "463958138378",
  appId: "1:463958138378:web:00a812719399fed932c9f3",
  measurementId: "G-4S5M4BWV82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app ;
