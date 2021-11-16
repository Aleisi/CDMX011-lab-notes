// import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/SignUp" component={SignUp} />
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
