import React, { useState } from "react";
import logo from "../images/1For.png";
import iconGoogle from "../images/iconGoogle.png";
import { Link, useHistory } from "react-router-dom";


const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const history = useHistory();

  const loginUser = (e) => {

    e.preventDefault();
    if (email === "" || password === "") {
      alert("test");
    // } else {auth.signInWithEmailAndPassword(email, password);
    //   auth
    //     .setPersistence(userPersistence)
    //     .then((res) => {
    //       history.push("/wallnotes");
    //       alert("Welcome");
    //     })
    //     .catch((err) => console.log(err));
    // }
    console.log("Me diste un click");
  };
 };

 const logInGoogle = () => {
  // auth.signInWithPopup(google)
  // .then(respuesta => {
  //     history.push('/home')
  //     setEmail(respuesta.email);
  // })
  //     .catch(err => {
  //         console.log(err)
  //     })
  console.log("Me diste un click");
 };


 return (
  <div className="containerLogin">
    <div className="logo">
      <img src={logo} alt="logo-Notes" />
    </div>
       <form id="login-form" className="form">
       <div>
        <input onChange={(e) => {setEmail(e.target.value)}} type="email"  placeholder="Email"></input>
        <input onChange={(e) => {setPassword(e.target.value)}} type="password"  placeholder="Password"></input>
          <button onClick={loginUser}>Log in</button>
          </div>

        <div className="login-google">
          <img src={iconGoogle} alt="logo google" className="icon" />
          <Link to="/Home">Login with Google</Link>
        </div>
        <Link to="/Login">
          <button onClick={logInGoogle}>Log in with Google</button>
        </Link>

        <div className="footerForm">
          <Link to="/SignUp">You do not have an account? Sign up</Link>
        </div>
      </form>
    
  </div>
 );
}; 

export default Login;
