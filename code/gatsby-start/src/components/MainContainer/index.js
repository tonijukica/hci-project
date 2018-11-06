import React from 'react'
import Card from '../Card'
import styles from './styles.module.css'

export default() =>(
    <div className = {styles.Container}>
        <p>Our most popular cryptocurrencies</p>
        <div className = {styles.MainContainer}>
            <Card>
                <p>Bitcoin</p>
            </Card>
            <Card>
                <p>Etherium</p>
            </Card>
            <Card>
                <p>Litecoin</p>
            </Card>
            <Card>
                <p>Monero</p>
            </Card>
            <Card>
                <p>Ripple</p>
            </Card>
            <Card>
                <p>Dash</p>
            </Card>
        </div>
    </div>
);


