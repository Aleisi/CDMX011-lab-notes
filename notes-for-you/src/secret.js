// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvh2Pbn3a2jz89TdmFe0jjKyl4H9m48Fg",
  authDomain: "notes-for-you-2021.firebaseapp.com",
  projectId: "notes-for-you-2021",
  storageBucket: "notes-for-you-2021.appspot.com",
  messagingSenderId: "965892683111",
  appId: "1:965892683111:web:9faa87186a736a5620abc2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp