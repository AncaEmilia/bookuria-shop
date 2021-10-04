import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../configs/firebase";
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = function() {
    return firebase.auth().signInWithPopup(provider);
}

export const signOut =function() {
    return firebase.auth().signOut();
}