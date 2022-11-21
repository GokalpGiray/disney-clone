// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxulE5Qc6IYn-NExUyELooYAEqAL0ToCQ",
  authDomain: "gg-disneyplus-clone.firebaseapp.com",
  projectId: "gg-disneyplus-clone",
  storageBucket: "gg-disneyplus-clone.appspot.com",
  messagingSenderId: "657874392255",
  appId: "1:657874392255:web:fbdbf7dfe760de6249a20a",
  measurementId: "G-LY0D84Y3CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage(); 

export { auth, provider, storage };
export default db;