import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link } from 'gatsby';
import Fuse from 'fuse.js';

class FilteredCoins extends Component {
    state = {
        search: ""
    };

    constructor(props) {
        super(props);

        const options = {
            threshold: 0.3,
            location: 0,
            distance: 1000,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: ["node.name"]
        };
        this.fuse = new Fuse(props.coins, options);
    }

    render() {
        const { coins } = this.props;
        const { search } = this.state;

        let searchResults = coins;

        if(search.length > 0) {
            searchResults = this.fuse.search(search);
        }
        const coinsList = searchResults.map((data) => {
            const id = data.node.id;
            const name = data.node.name;
            const current_price = data.node.market_data.current_price.usd;
            const price_change_24h_in_currency = data.node.market_data.price_change_24h_in_currency.usd;
            const market_cap = data.node.market_data.market_cap.usd;
            const total_volume = data.node.market_data.total_volume.usd;

            return (
                <tr key = { id }>
                    <td>
                        <Link to={`coin/${id}`}>
                            {name}
                        </Link>
                    </td>
                    <td>{current_price}</td>
                    <td>{price_change_24h_in_currency}</td>
                    <td>{total_volume}</td>
                    <td>{market_cap}</td>
                </tr>
            );
        });
        return (
            <>
                <div
                    style={{
                        display: "flex",
                        paddingTop: "1rem",
                        marginBottom: "1rem",
                        borderBottom: "1px solid var(--color-grey)"
                    }}
                >
                    <label
                        className={styles.Label}
                        style={{ position: "relative", marginLeft: "auto" }}
                    >
                        <input
                            className={styles.Input}
                            type="search"
                            value={this.state.search}
                            onChange={e => this.setState({ search: e.target.value })}
                            placeholder="Search coins"
                        />
                    </label>
                </div>
                <div>
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
                </div>
            </>
        );


    }

}
export default FilteredCoins;
/*
export default({ coins }) => {
    const coinsList = coins.map(coin => {
    const id  = coin.node.id;
    const name = coin.node.name;
    const current_price = coin.node.market_data.current_price.usd;
    const price_change_24h_in_currency = coin.node.market_data.price_change_24h_in_currency.usd;
    const market_cap = coin.node.market_data.market_cap.usd;
    const total_volume = coin.node.market_data.total_volume.usd;
    return (
        <tr key = { id }>
                <td>
                    <Link to={`coin/${id}`}>
                        {name}
                    </Link>
                </td>
                <td>{current_price}</td>
                <td>{price_change_24h_in_currency}</td>
                <td>{total_volume}</td>
                <td>{market_cap}</td>
            
        </tr>
        );
    });
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
    )};*/