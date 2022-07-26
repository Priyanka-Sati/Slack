import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAdQEk2Qciz--vyLmD57sCkgi1PfbrSNU",
  authDomain: "slack-clone-90299.firebaseapp.com",
  projectId: "slack-clone-90299",
  storageBucket: "slack-clone-90299.appspot.com",
  messagingSenderId: "786471506659",
  appId: "1:786471506659:web:10dcd72ce3187a095dabd6",
  measurementId: "G-EDVJX0K6MY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
