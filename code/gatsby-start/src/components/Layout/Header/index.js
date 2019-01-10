import React from "react";
import { Container } from "components";
import Nav from "./Nav";
import NavLink from "./NavLink";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import navLinks from "config/menu.js";
import { PrivateRoute } from "components";
import logo from './logo.png'
import { isLoggedIn } from '../../../services/auth/auth';

export default ({ children }) => {
  const nav = navLinks.map(link => {
    if (link.private) {
      return (
        <PrivateRoute
          key={link.path}
          render={() => (
            <NavLink
              key={link.path}
              to={link.path}
              className={styles.PrivateLink}
              activeClassName={styles.PrivateLink_active}
            >
              {link.text}
            </NavLink>
          )}
        />
      );
    }
    if(isLoggedIn() && link.login)
      return null;

    return (
      <NavLink key={link.path} to={link.path}>
        {link.text}
      </NavLink>
    );
  });

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <Link to="/" className>
            <img src={logo} alt ='logo' className={styles.Logo}/>
        </Link>
        <Nav>{nav}</Nav>
      </Container>
      {children}
    </header>
  );
};