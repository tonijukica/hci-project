import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link } from 'gatsby';
import Fuse from 'fuse.js';
import currencyFormatter from 'currency-formatter';

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
            const price_change_24h = data.node.market_data.price_change_percentage_24h;
            const market_cap = data.node.market_data.market_cap.usd;
            const total_volume = data.node.market_data.total_volume.usd;
            
            return (
                <tr key = { id }>
                    <td>
                        <Link to={`coin/${id}`}>
                            {name}
                        </Link>
                    </td>
                    <td>{currencyFormatter.format(Math.round(current_price * 100) / 100,{code: 'USD'})}</td>
                    <td>{Math.round(price_change_24h * 100) / 100}%</td>
                    <td>{currencyFormatter.format(total_volume,{code: 'USD'})}</td>
                    <td>{currencyFormatter.format(market_cap ,{code: 'USD'})}</td>
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
