// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwR68eO-yg2qp5udfyfl1d1508KyUNxag",
  authDomain: "myproject-52c71.firebaseapp.com",
  projectId: "myproject-52c71",
  storageBucket: "myproject-52c71.firebasestorage.app",
  messagingSenderId: "614450030477",
  appId: "1:614450030477:web:2b3f373b15610f27e83fc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
