import { useState } from "react";
import logo from "../images/LogoNF.png";
import iconGoogle from "../images/iconGoogle.png";
import "./Login/login.css";
import { Link, useHistory } from "react-router-dom";
import { login, gmailAuth } from "../lib/auth";

function Login ()  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => {
        console.log("You logged in");
        history.push("/Home");
      }).catch((error) => {
        setError(error.message)
    });
  };

  const handleGmail= (e) =>{
    e.preventDefault()
    gmailAuth()
    .then((result) => {
        history.push("/home")
        const user = result.user.displayName;
        console.log(user);
        console.log("You logged in with Gmail")
    }).catch((error) => {
      alert(error.message);
      });
  }

  return (
    <div className="containerLogin">
      <div className="logo">
        <img src={logo} alt="logo-Notes" />
      </div>

      <form id="login-form" className="form">
        <div>
          <input onChange={(e) => {setEmail(e.target.value);}}
            id= "email" type="email" placeholder="Email" />
          <input onChange={(e) => { setPassword(e.target.value) }}
           id="password" type="password" placeholder="Password"  />

          <div className="error__section">{error}</div>

          <button onClick={handleLogin}>Log in</button>
        </div>

        <br></br>

        <div className="login-google">
          <img src={iconGoogle} alt="logo google" className="icon" />

          <Link to="/Home" onClick={handleGmail}>Login with Google</Link>
        </div>

        <br></br>
        <div className="link-to-signup">
          <p>
            ¿Don't have an account? <Link to="/SignUp"> Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
