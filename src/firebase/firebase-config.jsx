import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0_W-yQxr07IrFrZwzccBgWFDiBIF_l0E",
  authDomain: "phone-verification-9d6af.firebaseapp.com",
  projectId: "phone-verification-9d6af",
  storageBucket: "phone-verification-9d6af.appspot.com",
  messagingSenderId: "826258774930",
  appId: "1:826258774930:web:359b913b54785940953f4b",
  measurementId: "G-G0EHN0E6E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);