'use strict';
const fs = require('fs');
const fetch = require('node-fetch');

fetch('https://api.coingecko.com/api/v3/coins')
    .then(res => res.json())
    .then((data) => {
        fs.writeFileSync('prices.json',JSON.stringify(data))
        console.log('Done fetching current prices');
    })