// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB47PxTTl-HX8A0fZ8JmGeJYPnOi9YVUb4",
  authDomain: "fir-authentication-21326.firebaseapp.com",
  projectId: "fir-authentication-21326",
  storageBucket: "fir-authentication-21326.appspot.com",
  messagingSenderId: "403739408722",
  appId: "1:403739408722:web:be037489b4ba8db7d6a28b",
  measurementId: "G-5HCN3F43J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;