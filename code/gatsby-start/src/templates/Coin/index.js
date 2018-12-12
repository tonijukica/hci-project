import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../../components";
import styles from "./styles.module.css";

export default ({data}) => {
  const { pricesJson: coin } = data;
    return (
        <Layout>
            <h1 className={styles}>{coin.name}</h1>
            <img src ={coin.image.large} alt={coin.name}></img>
        </Layout>
    );
};




export const query = graphql`
query Coin($id: String!) 
{ 
  pricesJson( id: {eq: $id}) {
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