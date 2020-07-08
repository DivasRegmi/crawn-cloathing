import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAMj7omq30O8is97z3AQDWBDfgI9SDCWgI",
  authDomain: "crwn-db-f1fdb.firebaseapp.com",
  databaseURL: "https://crwn-db-f1fdb.firebaseio.com",
  projectId: "crwn-db-f1fdb",
  storageBucket: "crwn-db-f1fdb.appspot.com",
  messagingSenderId: "804202661952",
  appId: "1:804202661952:web:68ac2c213af956210c37a5",
  measurementId: "G-WWCG7T8LSB",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
