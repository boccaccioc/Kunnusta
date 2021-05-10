/*
 * Contains all app's secrets
 *
 * @author Colin Boccaccio
 */

exports.ALPHAVANTAGE_API = {
    URL: 'https://www.alphavantage.co/query',
    TOKEN: '',
};
exports.YAHOOFINANCE_API = {
    URL: 'https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/',
    HOST: 'yahoo-finance-low-latency.p.rapidapi.com',
    TOKEN: '',
};

// WARNING: really lousy encryption key!
exports.COOKIE_ENCRYPTION_KEY = 'SECRET';

// This object was downloaded directly from Google Cloud Service Credentials Console to configure access
//   https://console.cloud.google.com/apis/credentials
exports.OAUTH = {};
    
// These should represent the final URLs for your front- and backend projects
exports.DEPLOYED_URLS = {
    // TODO: change to Heroku and GitLab URLs, with a trailing slash
    SERVER: 'https://gentle-basin-50134.herokuapp.com/',
    VIEW: 'https://compsci290_2021spring.dukecs.io/portfolio_cmb171/FinalProject/final_ui/dist/',
};

//firebase
exports.FIREBASE_CONFIG = {};
