import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <Router>
      <Switch> 
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login}/>
        <Route path='/Register' component={Register}/>
      </Switch> 
    </Router>
  );
}

export default App;
  