import * as firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGqK5S4kEbF7FUO0cCn4KhTTIPuUhxF-g",
    authDomain: "reactchat-project.firebaseapp.com",
    databaseURL: "https://reactchat-project.firebaseio.com",
    projectId: "reactchat-project",
    storageBucket: "reactchat-project.appspot.com",
    messagingSenderId: "315747345637",
    appId: "1:315747345637:web:0ff65f829e9442d43aa00c"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Cloud Firestore through Firebase
  const db = firebase.firestore();

  // export firestore db
  export default db;

  