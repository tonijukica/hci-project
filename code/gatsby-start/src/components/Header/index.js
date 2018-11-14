import React from "react";
import Container from "../Container";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";

export default () => (
    <header className={styles.Header}>
        <Container className={styles.Container}>
        <span><img src='./logo.png' alt ='logo' className={styles.Logo}></img></span>
            <Nav>
                <NavLink to="/" exact="true">Home</NavLink>
                <NavLink to="/prices/">Prices</NavLink>
                <NavLink to="/icos/">ICOs</NavLink>
                <NavLink to="/news/">News</NavLink>
                <NavLink to="/login/">Login</NavLink>
            </Nav>
        </Container>
    </header>
);