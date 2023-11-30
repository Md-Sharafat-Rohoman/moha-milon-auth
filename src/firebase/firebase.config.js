// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMOPzgYIYgmhixu-3o_tYdngLgC9SMBwU",
  authDomain: "moha-milon-auth-8bdaf.firebaseapp.com",
  projectId: "moha-milon-auth-8bdaf",
  storageBucket: "moha-milon-auth-8bdaf.appspot.com",
  messagingSenderId: "1004657024924",
  appId: "1:1004657024924:web:5537f31d618b7c98e5f259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;