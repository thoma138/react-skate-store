// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPC5JqQQU6bvDVjTBKcjWlzyyvHtkkjqQ",
  authDomain: "challenge-37df7.firebaseapp.com",
  projectId: "challenge-37df7",
  storageBucket: "challenge-37df7.appspot.com",
  messagingSenderId: "240969748684",
  appId: "1:240969748684:web:c1f7119af238889da5b269",
  measurementId: "G-7MEVBH441B",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
