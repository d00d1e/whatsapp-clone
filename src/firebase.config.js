import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKRYRIuQs-l-aw0pfc-omBsae0FKSaaww",
  authDomain: "whatsapp-clone-a8043.firebaseapp.com",
  projectId: "whatsapp-clone-a8043",
  storageBucket: "whatsapp-clone-a8043.appspot.com",
  messagingSenderId: "852220070490",
  appId: "1:852220070490:web:3717fb47683ebe11e5e663",
  measurementId: "G-ZYPEMNSSSR",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// Google auth
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
