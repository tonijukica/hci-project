import React, { Component } from "react";
import { graphql } from "gatsby";
import styles from "./styles.module.css";
import FadeLoader from 'react-spinners/FadeLoader';
import currencyFormatter from 'currency-formatter';


class coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ath: null,
      ath_date: null,
      currentPrice: null,
      marketCap: null,
      priceChange24hPercentage: null,
      priceChange7dPercentage: null,
      priceChange30dPercentage: null,
      priceChange1yPercentage: null,
      totalVolume: null,
      sparkLine7d: null,
      homePage: null,
      isLoading: false
    }
  }
  componentDidMount() {
    this.setState({isLoading: true});
    this.getData = () => {
      fetch('https://api.coingecko.com/api/v3/coins/'+this.props.data.pricesJson.id+'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true')
        .then(response => response.json())
        .then((data) => {
          this.setState({
            ath: data.market_data.ath.usd,
            ath_date: data.market_data.ath_date.usd,
            currentPrice: data.market_data.current_price.usd,
            marketCap: data.market_data.market_cap.usd,
            priceChange24hPercentage: data.market_data.price_change_percentage_24h,
            priceChange7dPercentage: data.market_data.price_change_percentage_7d,
            priceChange30dPercentage: data.market_data.price_change_percentage_30d,
            priceChange1yPercentage: data.market_data.price_change_percentage_1y,
            totalVolume: data.market_data.total_volume.usd,
            sparkLine7d: data.market_data.sparkline_7d.price,
            homePage: data.links.homepage[0]
          });
          this.setState({isLoading: false});
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
    const { isLoading } = this.state;
    if(isLoading)
    {
      return ( 
        <div className = {styles.Loader}>
          <FadeLoader
              loading = {isLoading}
              sizeUnit = {'px'}
              size = {'150'}
              color = {'#2E86C3'}
          />
        </div>
    );
    }
    else {
      return (
          <>
              <a
                href="/prices"
                className={styles.button}
              >
                <i className={styles.arrow}></i>
                Return
              </a> 
              <div className = {styles.view}>
                <div className = {styles.infoBox} >
                  <img className={styles.coinImage} src ={coin.image.large} alt={coin.name}></img>
                  <div className = {styles.coinName}>
                    <h2>{coin.name}</h2>
                    <a href= {this.state.homePage}>Homepage</a>
                  </div>
                </div>
                <div className={styles.priceBox}>
                  <h1 className = {styles.Title}>{coin.name} Price</h1>
                  <div className = {styles.firstRow}>
                    <div className={styles.currentPrice}>
                      Current price
                      <h2>{currencyFormatter.format(Math.round(this.state.currentPrice * 100) / 100,{code: 'USD'})}</h2>
                    </div>
                    <div className={styles.ath}>
                      All time high
                      <h2>{currencyFormatter.format(Math.round(this.state.ath* 100) / 100,{code: 'USD'})}</h2>
                      
                    </div>
                  </div>
                  <div className = {styles.secondRow}>
                    <div className={styles.dailyChange}>
                      Daily change
                      <h2 className = {this.state.priceChange24hPercentage>0 ? styles.rising : styles.falling}>{Math.round(this.state.priceChange24hPercentage * 100) / 100}%</h2>
                    </div>
                    <div className={styles.weeklyChange}>
                      Weekly change
                      <h2 className = {this.state.priceChange7dPercentage>0 ? styles.rising : styles.falling}>{Math.round(this.state.priceChange7dPercentage * 100) / 100}%</h2>
                      
                    </div>
                    <div className={styles.monthlyChange}>
                      Monthly change
                      <h2 className = {this.state.priceChange30dPercentage>0 ? styles.rising : styles.falling}>{Math.round(this.state.priceChange30dPercentage * 100) / 100}%</h2>
                    </div>
                    <div className={styles.yearlyChange}>
                      Yearly change
                      <h2 className = {this.state.priceChange1yPercentage>0 ? styles.rising : styles.falling}>{Math.round(this.state.priceChange1yPercentage * 100) / 100}%</h2>

                    </div>
                  </div>
                  
                  <div className = {styles.thirdRow}>
                    <div className={styles.marketCap}>
                      Market cap
                      <h2>{currencyFormatter.format(Math.round(this.state.marketCap * 100) / 100,{code: 'USD'})}</h2>
                    </div>
                    <div className={styles.totalVolume}>
                      Total volume
                      <h2>{currencyFormatter.format(Math.round(this.state.totalVolume * 100) / 100,{code: 'USD'})}</h2>
                    </div>
                  </div>

                </div>
              </div>
          </>
      );
    }
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