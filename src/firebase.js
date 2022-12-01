import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgCTvuloCmpoAhD7L04FPn5deugRQacSo",
    authDomain: "linkedin-clone-58db0.firebaseapp.com",
    projectId: "linkedin-clone-58db0",
    storageBucket: "linkedin-clone-58db0.appspot.com",
    messagingSenderId: "914515748739",
    appId: "1:914515748739:web:a26348c993d7672b2c38b6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };