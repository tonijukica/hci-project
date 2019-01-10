import React from 'react'
import Card from '../Card'
import styles from './styles.module.css'
import { Link } from 'gatsby';

export default() =>(
    <div className = {styles.Container}>
        <p>Our most popular cryptocurrencies</p>
        <div className = {styles.MainContainer}>
        	<Link to='coin/bitcoin'>
                <Card coinName='Bitcoin' source='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1510040391' />
            </Link>
            <Link to='coin/ethereum'>
                <Card coinName='Ethereum' source='https://assets.coingecko.com/coins/images/279/large/ethereum.png?1510040267' />
            </Link>
            <Link to='coin/litecoin'>
                <Card coinName='Litecoin' source='https://assets.coingecko.com/coins/images/2/large/litecoin.png?1510040295' />
            </Link>
            <Link to='coin/monero'>
                <Card coinName='Monero' source='https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1541643657' />
            </Link>
            <Link to='coin/ripple'>
                <Card coinName='Ripple' source='https://assets.coingecko.com/coins/images/44/large/XRP.png?1536205987' />
            </Link>
            <Link to='coin/dash'>
                <Card coinName='Dash' source='https://assets.coingecko.com/coins/images/19/large/dash.png?1541989751'/>
            </Link>  
        </div>
    </div>
);


