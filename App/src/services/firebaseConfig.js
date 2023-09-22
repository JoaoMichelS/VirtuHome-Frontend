// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASSiuo78XmrYl8U3sXtjTiLFS7JMduXdU",
  authDomain: "virtuhome-b701e.firebaseapp.com",
  projectId: "virtuhome-b701e",
  storageBucket: "virtuhome-b701e.appspot.com",
  messagingSenderId: "704195403351",
  appId: "1:704195403351:web:cc5ceacec5a80448404d12",
  measurementId: "G-ER0V56KLZ1"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

