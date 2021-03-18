import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: "AIzaSyDi2V80HyL2lFb7TF8AYpN3_1ehfWiAmbw",
    authDomain: "login-4bd1a.firebaseapp.com",
    projectId: "login-4bd1a",
    storageBucket: "login-4bd1a.appspot.com",
    messagingSenderId: "346828146415",
    appId: "1:346828146415:web:8122c1d140ec6834667d1a",
    measurementId: "G-46RKR3L0CD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
