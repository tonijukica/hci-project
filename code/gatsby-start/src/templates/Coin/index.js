import React, { Component } from "react";
import { graphql } from "gatsby";
import { Layout } from "../../components";
import styles from "./styles.module.css";

class coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ath: null,
      ath_date: null,
      currentPrice: null,
      marketCap: null,
      priceChange24hCurrency: null,
      priceChange24hPercentage: null,
      priceChange7dPercentage: null,
      priceChange30dPercentage: null,
      priceChange1yPercentage: null,
      totalVolume: null,
      sparkLine7d: null
    }
  }
  componentDidMount() {
    this.getData = () => {
      fetch('https://api.coingecko.com/api/v3/coins/'+this.props.data.pricesJson.id+'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true')
        .then(response => response.json())
        .then((data) => {
          this.setState({
            ath: data.market_data.ath.usd,
            ath_date: data.market_data.ath_date.usd,
            currentPrice: data.market_data.current_price.usd,
            marketCap: data.market_data.market_cap.usd,
            priceChange24hCurrency: data.market_data.price_change_24h_in_currency.usd,
            priceChange24hPercentage: data.market_data.price_change_percentage_24h,
            priceChange7dPercentage: data.market_data.price_change_percentage_7d,
            priceChange30dPercentage: data.market_data.price_change_percentage_30d,
            priceChange1yPercentage: data.market_data.price_change_percentage_1y,
            totalVolume: data.market_data.total_volume.usd,
            sparkLine7d: data.market_data.sparkline_7d.price
          });
        })
        .catch((e) => {
          console.log(e);
        })
    }
    this.getData();
    this.refresh = setInterval(() => this.getData(),90000);
  }
  componentWillUnmount() {
    clearInterval(this.refresh);
  }
  render() {
    const { pricesJson: coin } = this.props.data;
    return (
        <Layout>
            <h1>{coin.name}</h1>
            <img className={styles.coinImage} src ={coin.image.large} alt={coin.name}></img>
            <div className={styles.infoBox}>
              <div className={styles.currentPrice}>
                <h2>Current price</h2>
                {this.state.currentPrice}
              </div>
              <div className={styles.marketCap}>
                <h2>Market cap</h2>
                {this.state.marketCap}
              </div>
              
              <div className={styles.totalVolume}>
                <h2>Total volume</h2>
                {this.state.totalVolume}
              </div>
              
              <div className={styles.dailyChange}>
                <h2>Daily change</h2>
                {this.state.priceChange24hPercentage}
              </div>
              
              <div className={styles.weeklyChange}>
                <h2>Weekly change</h2>
                {this.state.priceChange7dPercentage}
              </div>
              
              <div className={styles.monthlyChange}>
                <h2>Monthly change</h2>
                {this.state.priceChange30dPercentage}
              </div>
              
              <div className={styles.yearlyChange}>
                <h2>Yearly change</h2>
                {this.state.priceChange1yPercentage}
              </div>
              
              <div className={styles.dailyChangeCurrency}>
                <h2>Daily change in currency </h2>
                {this.state.priceChange24hCurrency}
              </div>
              <div className={styles.ath}>
                <h2>All time high</h2>
                {this.state.ath}
              </div>
            </div>
        </Layout>
    );
  }
} 
/*export default ({data}) => {
  console.log(data);
  
};*/

export default coin;



export const query = graphql`
query Coin($id: String!) 
{ 
  pricesJson( id: {eq: $id}) {
    id
    name
    image {
      large
      small
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
      price_change_percentage_7d
      price_change_percentage_30d
      price_change_percentage_1y

      price_change_24h_in_currency {
        usd
      }
    }
  }} 
`;