import React from "react";
import { Layout } from "../components";
import { CoinTable } from '../components'
import { graphql } from "gatsby";

export default ({ 
    data: {
        allPricesJson: { edges: coins }
    } 
}) => {
    return (
        <Layout>
        <h1>Prices</h1>
        <CoinTable coins = {coins}/>
        </Layout>
    );
};

export const query = graphql` query Coins {allPricesJson{edges{node{id name market_data{current_price{usd} price_change_percentage_24h market_cap{usd} total_volume{usd} }}}}}`;