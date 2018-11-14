import React from "react";
 import styles from './styles.module.css';
 import SiteContainer from "../SiteContainer";
 import Container from "../Container";
 import Header from "../Header";
 import Footer from '../Footer';
 // eslint-disable-next-line
 import _ from "../../styles/index.css";

 export default ({ children }) => (
     <SiteContainer className = {styles.SiteContainer}>
         <Header className = {styles.Header} />
         <Container className = {styles.Container}>{children}</Container>
         <Footer className = {styles.Footer} />
     </SiteContainer>
 );