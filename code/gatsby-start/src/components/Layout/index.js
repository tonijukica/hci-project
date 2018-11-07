import React from "react";
 import SiteContainer from "../SiteContainer";
 import Container from "../Container";
 import Header from "../Header";
 import Footer from '../Footer';
 // eslint-disable-next-line
 import _ from "../../styles/index.css";

 export default ({ children }) => (
     <SiteContainer>
         <Header />
         <Container>{children}</Container>
         <Footer/>
     </SiteContainer>
 );