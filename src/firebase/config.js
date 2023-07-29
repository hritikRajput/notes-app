import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBx3gY4QdWeKQgubguNmZ_VsRTkYpEPhA",
  authDomain: "notes-app-8fc8a.firebaseapp.com",
  projectId: "notes-app-8fc8a",
  storageBucket: "notes-app-8fc8a.appspot.com",
  messagingSenderId: "1005496939920",
  appId: "1:1005496939920:web:6f745d18bf65af8a9a6f15",
  measurementId: "G-29LS8Q6C95",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
export { projectFirestore };
