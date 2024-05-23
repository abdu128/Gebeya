// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu2YCIMSq4pTsyNRqVahwH8ho-lwtU6Jg",
  authDomain: "gebeya-bb776.firebaseapp.com",
  projectId: "gebeya-bb776",
  storageBucket: "gebeya-bb776.appspot.com",
  messagingSenderId: "1074632944394",
  appId: "1:1074632944394:web:2c99189708382af82928f3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
