 import firebase from 'firebase/app';
 import 'firebase/auth'; 
 import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvh2Pbn3a2jz89TdmFe0jjKyl4H9m48Fg",
  authDomain: "notes-for-you-2021.firebaseapp.com",
  projectId: "notes-for-you-2021",
  storageBucket: "notes-for-you-2021.appspot.com",
  messagingSenderId: "965892683111",
  appId: "1:965892683111:web:9faa87186a736a5620abc2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
