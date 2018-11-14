import React from "react";
 import styles from './styles.module.css';
 import SiteContainer from "../SiteContainer";
 import Header from "../Header";
 import Footer from '../Footer';
 import Main from '../Main';
 // eslint-disable-next-line
 import _ from "../../styles/index.css";

 export default ({ children }) => (
     <SiteContainer className = {styles.SiteContainer}>
         <Header className = {styles.Header} />
         <Main className = {styles.Container}>{children}</Main>
         <Footer className = {styles.Footer} />
     </SiteContainer>
 );