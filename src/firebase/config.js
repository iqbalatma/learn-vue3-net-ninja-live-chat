import firebase from "firebase/app"
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnpUXzBjh9-sfADloOHk-dihisOjsQzIs",
    authDomain: "net-ninja-9ffc4.firebaseapp.com",
    projectId: "net-ninja-9ffc4",
    storageBucket: "net-ninja-9ffc4.appspot.com",
    messagingSenderId: "994207739256",
    appId: "1:994207739256:web:76152cafe2124bed336c8d",
    measurementId: "G-NX7LJCLTM4"
};


//init firebase
firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
export { projectFirestore, timestamp }