// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ675h_lX844OyJ8O2BKUBCkshpcoeXyA",
    authDomain: "fir-react-project-88403.firebaseapp.com",
    projectId: "fir-react-project-88403",
    storageBucket: "fir-react-project-88403.appspot.com",
    messagingSenderId: "450691876366",
    appId: "1:450691876366:web:2e3f3e718f3a401541de5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;