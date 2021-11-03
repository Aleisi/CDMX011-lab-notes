import React from 'react'
import { Link } from "react-router-dom";

const Home = () => (
  <div >
  <Link to = '/Login'><button>Login</button></Link>
  <button>SignUp</button>
  </div>
)

export default Home