import React, { useState } from 'react';
import logo from "../images/LogoNFY.png";
import { Link, useHistory } from "react-router-dom";


const SignUp = () => {
  const [email, setEmail] = useState ('')
  const [pass, setPass] = useState('')
  const [passCon, setPassCon] = useState('')
  const history = useHistory();

  const registerUser = (e) =>{
      e.preventDefault()
      if (pass === passCon){
          auth.createUserWithEmailAndPassword(email,pass)
          .then((res) => {
              history.push('/wallnotes')
              alert('Usuario Registrado')
          })
          .catch((err) => console.log(err))      
          }  else {
          alert('The passwords must coincide');
      }
  }

  const registerGoogle =(e) => {
      auth.signInWithPopup(google)
      .then(respuesta => {
          history.push('/wallnotes')
      })
          .catch(err => {
              console.log(err)
          })
  }

return(
  <div className="signUpContainer">
         <div className="logo">
           <Link to="/"><img src={logo} alt="logoNotes"/></Link>
        <form  onSubmit={registerUser} className="formSignup">
          <div className='boxcontainer'>
          <h3>SignUp</h3>
      <input  onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" className="emailSignUp"/><br/>
      <input  onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="Password" className="passSign"/><br/>
      <input  onChange={(e) => {setPassCon(e.target.value)}} type="password" placeholder="Confirm Password" /><br/>
      <button>Submit</button>
          </div>
          <div>
          <p>OR</p>
      <button onClick={registerGoogle}>Continue with Google</button>
      <p className="text-link">Are you already registred? <Link to="/">Login</Link></p>
          </div>
      </form>
      </div>
  </div>
);
}

export default SignUp;

// const SignUp = () => {
//     return (
//       <div className="containerSignUp">
//         <div className="logo">
//           <Link to="/"><img src={logo} alt="logoNotes"/></Link>
//         <form id="signup" className="form">
//           <input type="email" placeholder="Email"></input>
//           <input type="password" placeholder="Password"></input>
//           <input type="password" placeholder="Confirm your password"></input>
//           <Link to = '/Home'><button>Sign Up</button></Link>
//         </form>
//         </div>
//       </div>
//     );
//   };
  

