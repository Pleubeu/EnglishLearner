const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bv2ic8v48v6ubfule3pg" // Replace this
const finnhubClient = new finnhub.DefaultApi()

finnhubClient.aggregateIndicator("AAPL", "D", (error, data, response) => {
    console.log(data)
});