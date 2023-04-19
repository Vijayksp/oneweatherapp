// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7cz3RQ6tg_BHqiOREzTShlXPd9hwxjqk",
  authDomain: "demo1-f7352.firebaseapp.com",
  databaseURL: "https://demo1-f7352-default-rtdb.firebaseio.com",
  projectId: "demo1-f7352",
  storageBucket: "demo1-f7352.appspot.com",
  messagingSenderId: "63311188097",
  appId: "1:63311188097:web:e2ac160890d3dddf913d80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;