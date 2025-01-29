// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrB9FupDgjjVk4_guLC24ydG3retE3bME",
  authDomain: "login-auth-4736e.firebaseapp.com",
  projectId: "login-auth-4736e",
  storageBucket: "login-auth-4736e.appspot.com",
  messagingSenderId: "10562914305",
  appId: "1:10562914305:web:2cff37be4fa9ccf0a29800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider } from "firebase/auth";
// import {getFirestore} from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC-FsYaDD13kZzH3hlrw_9XYjVn5Q6ACcQ",
//   authDomain: "chat-bot-2ba2a.firebaseapp.com",
//   projectId: "chat-bot-2ba2a",
//   storageBucket: "chat-bot-2ba2a.firebasestorage.app",
//   messagingSenderId: "88177450805",
//   appId: "1:88177450805:web:f921b7ab0734b6aec1367c",
//   // measurementId: "G-CSHB0N246B"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth=getAuth(app);
// export const db=getFirestore(app);
// export const googleProvider = new GoogleAuthProvider();
// export default app;