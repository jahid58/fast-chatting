import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAfesnMkLGVB3xyTa0a9dmmGGN77KYEt9Q",
    authDomain: "fast-chatting-11cb2.firebaseapp.com",
    projectId: "fast-chatting-11cb2",
    storageBucket: "fast-chatting-11cb2.appspot.com",
    messagingSenderId: "854457787269",
    appId: "1:854457787269:web:15028f99a5292801bbdaec",
    measurementId: "G-JF1S34STKY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;