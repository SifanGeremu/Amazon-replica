// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdERoAM97RKAHIzUsO6vA3V2-j6lu674Y",
  authDomain: "clone-f783d.firebaseapp.com",
  projectId: "clone-f783d",
  storageBucket: "clone-f783d.appspot.com",
  messagingSenderId: "318065069138",
  appId: "1:318065069138:web:57e9c337926704e097638b",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Now, correctly call getAuth with the initialized app
const auth = getAuth(app); // ✅ Correct way to get auth instance
export const db = getFirestore(app); // ✅ Firestore initialization

export { auth, };
