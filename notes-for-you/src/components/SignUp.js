import React, { useState }from "react";
import logo from "../images/LogoNFY.png";
import { Link, useHistory } from "react-router-dom";
import { signupUser } from "../lib/auth";

  const SignUp = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();

   const handleSignUp = (e) => {
    //The code for sign up
    e.preventDefault();
    console.log('You signed in')
    if(password === confirmPassword){
      console.log(email)
      signupUser(email,password)
      .then(() => {
        history.push('/Home')
         console.log('Signed in user');
       }
      );
    };
   };
   

  return (
    <div className="container-signup">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logoNotes" />
        </Link>
        <form id="signup" className="form-container">
        <br></br>
          <h2>SING UP</h2>
         
          <input onChange={(e) => { setEmail(e.target.value); } } type="email" placeholder="Email"></input>
          <input onChange={(e) => {setPassword(e.target.value);} } type="password" placeholder="Password"></input>
          <input onChange={(e) => {setConfirmPassword(e.target.value);} } type="password" placeholder="Confirm your password"></input>
 
            <button onClick={handleSignUp}  type="submit" >Sign Up</button>
        </form>
        
        <p>¿Do you already have an account? <Link to="/"> Login</Link></p>

      </div>
    </div>
  );
 };


export default SignUp
