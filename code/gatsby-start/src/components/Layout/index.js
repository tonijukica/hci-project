import React from "react";
 import SiteContainer from "../SiteContainer";
 import Container from "../Container";
 import Header from "../Header";
 // eslint-disable-next-line
 import _ from "../../styles/index.css";

 export default ({ children }) => (
     <SiteContainer>
         <Header />
         <Container>{children}</Container>
     </SiteContainer>
 );