import React from "react";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageNotFound";
// import "./styles/Home.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/SignUp" component={SignUp} />
        <Route component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
