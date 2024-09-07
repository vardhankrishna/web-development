import React from "react";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import "../src/App.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import ErrorPage from "./ErrorPage";
import Cal from "./Cal";
const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/Cal">
          <Cal/>
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;