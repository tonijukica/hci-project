import React from "react";
import { Layout } from "../components";
import { Showcase } from "../components";
import { MainContainer } from '../components';


 export default () => {
    return ( 
        <Layout> 
            <Showcase />
            <MainContainer />
        </Layout>
    );
 };