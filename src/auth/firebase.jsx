
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxqCxkvU4dqL1tC99pyqEmoKrTghoM-uM",
  authDomain: "clean-it-80476.firebaseapp.com",
  projectId: "clean-it-80476",
  storageBucket: "clean-it-80476.appspot.com",
  messagingSenderId: "276864066199",
  appId: "1:276864066199:web:cd1eb95d5a6b04a2983fd2",
  measurementId: "G-QGRF8DS7SC"
};

const fb = initializeApp(firebaseConfig);

export default fb;