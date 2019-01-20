import React from "react";
import { PrivateRoute } from "components";
import { Router } from "@reach/router";
import Login from "components/Private/Login";
import Dashboard from "components/Private/pages/Dashboard.js";
import {
  handleLogin,
  handleLogout,
  isLoggedIn
} from "services/auth/auth.js";
import { navigate } from "gatsby";
import styles from "styles/pages/private.module.css";
const Logout = () => (
  <a
    href="/"
    onClick={event => {
      event.preventDefault();
      handleLogout();
      navigate("/login");
    }}
    className = {styles.button}
  >
    Logout
  </a>
);

export default () => (
  <>
    {isLoggedIn() ? 
      <Logout />
     : (
      <>
        <h1>Login</h1>
        <Login private="/private/dashboard" handleLogin={handleLogin} />
      </>
    )}
    <Router>
      <PrivateRoute
        path="/private/dashboard"
        render={Dashboard}
        redirect={"/login"}
      />  
    </Router>
  </>
);