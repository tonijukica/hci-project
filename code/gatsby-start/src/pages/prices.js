import React from "react";
import { Layout } from "../components";
import { CoinTable } from '../components'

export default () => (
    <Layout>
        <h1>Prices</h1>
        <CoinTable>

        </CoinTable>
    </Layout>
);

// query for pulling coin data query Coins {allPricesJson{edges{node{id market_data{current_price{usd} price_change_24h_in_currency{usd} market_cap{usd} total_volume{usd} }}}}}