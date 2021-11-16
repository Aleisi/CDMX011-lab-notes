import React from "react";
import logo from "../images/LogoHome.png";
import { useHistory } from 'react-router';
//  import { Link } from "react-router-dom";
import { auth } from '../lib/firebase';
import "./home.css"


const Home = () => {

  const history = useHistory();

  const handleLogout = (e) =>{
      auth.signOut()
      .then(e =>{
        history.push('/')  
      })
      .catch(error => {
          console.log(error)
          console.log('your session ended successfully')
      })
  };

  return (
    
    <div className="home-notes">
    <div className="logo"><img src={logo} alt="logo-Notes" /></div>

    <section id="login-form" className="form">
    <br></br>
      <div id="home">
        <button>Add your Note</button>
        <button onClick={handleLogout}>Sign Out</button>
      </div>
      </section>
      </div>
    
  );

};
export default Home;
