import React from "react";
import "./App.css";
import Todo from "./components/todo.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Footer from "./components/footer";

const App = () => {
  const checkCurrVault = () => {
    return Boolean(localStorage.getItem("currentVault"));
  };

  return (
    <div className="app">
      <div className="container">
        {checkCurrVault() ? (
          <Switch>
            <Route path="/vault" component={Todo} />
            <Redirect from="/" to="/vault" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect form="/vault" exact to="/login" />
          </Switch>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
