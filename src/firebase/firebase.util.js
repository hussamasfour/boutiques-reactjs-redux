import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyC3Dw-1fSqiODMYLS29TbKrsZheaBuQuU4",
  authDomain: "boutiques-db.firebaseapp.com",
  projectId: "boutiques-db",
  storageBucket: "boutiques-db.appspot.com",
  messagingSenderId: "903458215421",
  appId: "1:903458215421:web:6bd65a7cc47b757eea7594",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
