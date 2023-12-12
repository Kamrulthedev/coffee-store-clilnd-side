// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfbLqxyohnt-BFeq8yDvlBQ32GCzT4hzQ",
  authDomain: "coffee-stors-clid-side.firebaseapp.com",
  projectId: "coffee-stors-clid-side",
  storageBucket: "coffee-stors-clid-side.appspot.com",
  messagingSenderId: "671459728539",
  appId: "1:671459728539:web:360ed9cc1d61be88f43a3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;