import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link } from 'gatsby';
import Fuse from 'fuse.js';
import currencyFormatter from 'currency-formatter';
import Lodash from 'lodash';
import ScrollToTop from 'react-scroll-up';
import SearchIcon from './SearchIcon';

class FilteredCoins extends Component {
    state = {
        search: "",
        sortName: false
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
    onChange = event => this.setState({ search: event.target.value });
    render() {
        const { coins } = this.props;
        const { search } = this.state;

        let searchResults = Lodash.orderBy(coins,['node.market_data.market_cap.usd'], ['desc']);

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
                        <td className = {styles.coinName}>
                            <Link to={`coin/${id}`}> 
                                {name}
                            </Link>
                        </td>
                        <td className = {styles.coinPrice}>
                            <Link to={`coin/${id}`}>
                                {currencyFormatter.format(Math.round(current_price * 100) / 100,{code: 'USD'})}
                            </Link>
                        </td>
                        <td className = {price_change_24h>0 ? styles.coinChange_green : styles.coinChange_red}>{Math.round(price_change_24h * 100) / 100}%</td>
                        <td className = {styles.coinVolume}>
                            <Link to={`coin/${id}`}> 
                                {currencyFormatter.format(total_volume,{code: 'USD'})}
                            </Link>
                        </td>
                        <td className = {styles.coinMarketCap}>{currencyFormatter.format(market_cap ,{code: 'USD'})}</td>
                        
                    </tr>
               
            );
        });
        return (
            <>
                <div className={styles.InputContainer}>
                    <h1>Prices</h1>
                    <label className={styles.Label}>
                        <input
                            className={styles.Input}
                            type="text"
                            value={this.state.search}
                            onChange={this.onChange}
                            placeholder="Search coins"
                        />
                        <SearchIcon className={styles.SearchIcon} />
                    </label>  
                </div>
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
                <ScrollToTop showUnder={160} style = { {bottom: 15,right: 15}}>
                    <img src = 'https://milosjanda.github.io/react-scroll-up/img/up_arrow_round.png' alt=''></img>
                </ScrollToTop>
            </>
        );


    }

}
export default FilteredCoins;
