import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, /*connectAuthEmulator*/ } from "firebase/auth";
import { getFirestore, /*connectFirestoreEmulator*/  } from "firebase/firestore";
import { getStorage, /*connectStorageEmulator*/ } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADXxs2mqiE-aEaUR1CuLfoUT359xf7Auw",
  authDomain: "fir-react-v03-project.firebaseapp.com",
  projectId: "fir-react-v03-project",
  storageBucket: "fir-react-v03-project.firebasestorage.app",
  messagingSenderId: "48105027741",
  appId: "1:48105027741:web:114e6cca299ec463627c74"
};

const app = initializeApp(firebaseConfig);

// Auth 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

// Storage
const storage = getStorage(app);

// Only connect to emulators when running locally
/*if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}*/

export { auth, provider };
export  { db };
export { storage };
