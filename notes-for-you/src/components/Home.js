import React from "react";
import { useHistory } from 'react-router';
//  import { Link } from "react-router-dom";

const Home = () => {

  const history = useHistory();

  const LogOutProfile = (e) =>{
      auth.signOut()
      .then(ele =>{
        history.push('/')  
      })
      .catch(err => {
          console.log(err)
          console.log('session ended successfully')
      })
  };

  return (
    <>
      <div id="home">
        <button>Add your Note</button>
        <button onClick={LogOutProfile}>Sign Out</button>
      </div>
    </>
  );

};
export default Home;
