// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDvR7VGPMY_mEoSEjntbshYQ7PLaXlYqU4",
  authDomain: "notes-app-8ac39.firebaseapp.com",
  projectId: "notes-app-8ac39",
  storageBucket: "notes-app-8ac39.firebasestorage.app",
  messagingSenderId: "768698674139",
  appId: "1:768698674139:web:4f391ee258d1b2c48215fe",
  measurementId: "G-6NCKGJ47QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default  auth;
