import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARZWUYyyGHQhYJllNN0SYEZB073kXijTI",
    authDomain: "linkedin-ffe2f.firebaseapp.com",
    projectId: "linkedin-ffe2f",
    storageBucket: "linkedin-ffe2f.appspot.com",
    messagingSenderId: "692467690209",
    appId: "1:692467690209:web:10084784aa1aa97a1165a0"
  };


const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth();


export {db,auth};