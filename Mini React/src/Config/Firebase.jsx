// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtsGl07QvllS2XZ9dupvBeXnKNGzQoCmw",
  authDomain: "auth-form-00.firebaseapp.com",
  projectId: "auth-form-00",
  storageBucket: "auth-form-00.appspot.com",
  messagingSenderId: "723007128938",
  appId: "1:723007128938:web:b943600f89bb0f0f41d113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth , db }