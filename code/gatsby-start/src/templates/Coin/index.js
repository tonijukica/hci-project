import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../../components";
import styles from "./styles.module.css";

export default ({data}) => {
    return (
        <Layout>
            <h1>{data.id}</h1>
        </Layout>
    );
};




export const query = graphql`query Coin($id: String!) {pricesJson( id: {eq: "bitcoin"}) {
    name
    image {
      large
    }
    market_data{
      current_price{
        usd
      }
      market_cap{
        usd
      }
      total_volume{
        usd
      }
      price_change_percentage_24h
    }
  }} 
`;