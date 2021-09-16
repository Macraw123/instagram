import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ForgotPassword from "./pages/forgot_password/ForgotPassword";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import { client } from "./lib/graphQL";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/" exact>
            <p>asd</p>
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <Route path="/forgot_password" exact>
            <ForgotPassword />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/explore" exact>
            <Explore />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </ApolloProvider>
    </div>
  );
}

export default App;
