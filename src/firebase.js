import firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "AIzaSyAAoypjcBtpemhVfTkgKOL14OCUYNx0CFw",
    authDomain: "imessege-clone-742b4.firebaseapp.com",
    projectId: "imessege-clone-742b4",
    storageBucket: "imessege-clone-742b4.appspot.com",
    messagingSenderId: "197483845307",
    appId: "1:197483845307:web:3c355ba5b9e3dfabb07b9e",
    measurementId: "G-GXT309484W"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;
