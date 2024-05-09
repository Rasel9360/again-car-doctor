// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg2RPlzR44dLwIgJukPN9SKyWCj7fYokU",
  authDomain: "car-doctor-98a06.firebaseapp.com",
  projectId: "car-doctor-98a06",
  storageBucket: "car-doctor-98a06.appspot.com",
  messagingSenderId: "305477050835",
  appId: "1:305477050835:web:66cc6cfc402149d842cf26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;