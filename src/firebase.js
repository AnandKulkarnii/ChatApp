// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn-tpYRJPQWhC5LXPFG0ffuynNkslciMs",
  authDomain: "chat-app-a46b3.firebaseapp.com",
  projectId: "chat-app-a46b3",
  storageBucket: "chat-app-a46b3.appspot.com",
  messagingSenderId: "157661807663",
  appId: "1:157661807663:web:c4ca43b108f47ac32932da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
