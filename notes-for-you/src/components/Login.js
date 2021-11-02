import React from 'react'
import { Link } from "react-router-dom";
//import "./index.css"

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const logIn = () => {
    console.log('Me diste un click')
  }

  const logInGoogle = () => {
    console.log('Me diste un click')
  }

    return (
      <>
        <form id="login">
          <input placeholder="Email"></input>
          <input placeholder="Contraseña"></input>
          <Link to = '/Home'><button onClick={logIn}>Log in</button></Link>
          <button onCLick={logInGoogle}>Log in with Google</button>
        </form>
      </>
    );
  };
  
  export default Login;