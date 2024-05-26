// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaNGV0sfhH412Mi0HfcARsAhQnq3BclUo",
  authDomain: "mern-book-project-e82ce.firebaseapp.com",
  projectId: "mern-book-project-e82ce",
  storageBucket: "mern-book-project-e82ce.appspot.com",
  messagingSenderId: "1098752381041",
  appId: "1:1098752381041:web:f75a0aef6a6fad90d90bd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;