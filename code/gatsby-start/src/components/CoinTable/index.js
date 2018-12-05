import React from "react";
import styles from "./styles.module.css";

export default({ coins }) => {
    const coinsList = coins.map(coin => {
    const id  = coin.node.id;
    const current_price = coin.node.market_data.current_price.usd;
    const price_change_24h_in_currency = coin.node.market_data.price_change_24h_in_currency.usd;
    const market_cap = coin.node.market_data.market_cap.usd;
    const total_volume = coin.node.market_data.total_volume.usd;
    return (
        <tr key = { id }>
            <td>{id}</td>
            <td>{current_price}</td>
            <td>{price_change_24h_in_currency}</td>
            <td>{total_volume}</td>
            <td>{market_cap}</td>
        </tr>
        );
    });
    console.log(coinsList);
    return (
    <table className = {styles.coinTable}>
        <thead>
            <tr>
                <th className = {styles.coinName}>
                    Name
                </th>
                <th className = {styles.coinPrice}>
                    Price
                </th>
                <th className = {styles.coinChange}>
                    Daily change
                </th>
                <th className = {styles.coinVolume}>
                    Volume
                </th>
                <th className = {styles.coinMarketCap}>
                    Market cap
                </th>
            </tr>
        </thead>
        <tbody>
           {coinsList}
        </tbody>
    </table>
    )};