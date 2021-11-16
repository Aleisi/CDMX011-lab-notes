import { auth, provider } from "./firebase"

export const login = (email, password) => 
    auth.signInWithEmailAndPassword(email, password); 

export const signupUser = (email, password) => 
    auth.createUserWithEmailAndPassword(email, password)

export const gmailAuth = () => auth.signInWithPopup(provider)