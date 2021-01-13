import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAJW03_hnr5Xz0jWM2V9E8HeaP1pJySN-w",
	authDomain: "feather-footwear.firebaseapp.com",
	projectId: "feather-footwear",
	storageBucket: "feather-footwear.appspot.com",
	messagingSenderId: "966854461001",
	appId: "1:966854461001:web:dcc74a9ab00a83be2c6198",
	measurementId: "G-K0M9D6K861",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
