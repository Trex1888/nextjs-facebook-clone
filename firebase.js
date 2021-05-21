import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6t-6yalGdjIKD_hysv-JtBHtgroMU-1c",
  authDomain: "next-fb2.firebaseapp.com",
  projectId: "next-fb2",
  storageBucket: "next-fb2.appspot.com",
  messagingSenderId: "614842991399",
  appId: "1:614842991399:web:9e223da4653afde0a89f02",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
