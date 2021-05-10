const express = require('express');
// package for logging attempts to access the server (for easier debugging)
const morgan = require('morgan');
// package that replicates fetch functionality built into the browser
const fetch = require('node-fetch');
// package that bundles up query parameters given as an Object into URL syntax
const querystring = require('querystring');
// package that allows certain URLs to access the server
//const cors = require('cors');
// set up server specific configuration values
const { YAHOOFINANCE_API } = require('./secrets');
// allows for requests to be made through rapid API
const unirest = require("unirest");

const dataStore = require('./DataStore.js');

const app = express();

// log all requests made to the server
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
//app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// set up authentication
const auth = require('./authentication.js');

auth.setupAuthentication(app);

const userData = {};

function returnAllData () {
    return async (req, res, next) => {
        // NOTE, not ideal to return ALL the data but makes it easier to debug and use by frontend
        const allData = await dataStore.getData();
        //dataStore.addStock('guest', 'AAPLl');
        res.status(200);
        res.json(allData);
    }
}

function returnUserData () {
    return async (req, res, next) => {
        const myData = await dataStore.getUserData(extractUserId(req));
        res.status(200);
        res.json(myData);
    }
}

function returnUserExists () {
    return async (req, res, next) => {
        console.log('here in returnUserExists');
        const thisUserExists = await dataStore.doesUserExist(extractUserId(req));
        res.status(200);
        res.json(thisUserExists);
    }
}

// return all the JSON data stored here
app.get(
    '/api/getFirebaseData',
    returnAllData()
);

app.get(
    '/api/userStocks',
    returnUserData()
);

app.get(
    '/api/doesUserExist',
        returnUserExists()
);

app.put(
    '/api/userData',
    (req, res) => {
        dataStore.pushStockList(extractUserId(req), req.body.newData);
        res.json({ status: 'ok' });
    },
);

app.post(
    '/api/createUser',
    (req, res) => {

        console.log('in server before call to dataStore to create user')
        dataStore.createNewUser(extractUserId(req));

        // if(!thisUserExists(extractUserId(req))){
        //     console.log('in server before call to dataStore to create user')
        //     dataStore.createNewUser(extractUserId(req));
        // }

        // async (req, res, next) => {
        //     //console.log(dataStore.doesUserExist(extractUserId(req)));
        //     //const thisUserExists = await dataStore.doesUserExist(extractUserId(req));
        //     //console.log(thisUserExists);
        //     console.log('in server before call to dataStore to create user')

        //     const thisUserExists = false;

        //     if(!thisUserExists){ //only creates if no user exists
        //         console.log('in server before call to dataStore to create user')
        //         await dataStore.createNewUser(extractUserId(req));
        //     }
        //     next();
        // },

        // console.log(dataStore.doesUserExist(extractUserId(req)));
        // if(!dataStore.doesUserExist(extractUserId(req))){ //only creates if no user exists
        //     console.log('in server before call to dataStore to create user')
        //     dataStore.createNewUser(extractUserId(req));
        // }
        res.json({ status: 'ok' });
    },
);

function extractUserId(req) {
    return req.user?.id || 'guest';
}

// API for getting information on the logged in user
app.get(
    '/api/user',
    (req, res) => {
        console.log("User data at /api/user");
        console.log(userData);
        // extract out the useful parts of the req.user object
        const id = extractUserId(req);
        const email = req.user && req.user.emails ? req.user.emails[0].value : 'Guest';
        res.json({
            id,
            email,
            photo: req.user?.photos?.length >= 1 ? req.user.photos[0].value : null,
        });
    },
);

app.get('/', (req, res) => {
    res.send(`
    <a href="api/get_data">Get the DATA!</a>
  `);
});

app.get('/api/tester', (req, res) => {
    res.send(`
    <h1> Testing!!! </h1>
  `);
});

app.get('/api/yahoo', (req, res, next) => {
    if (!req.query.ticker) {
        const err = new Error('Usage: please provide the symbol query parameter');
        // set status code to return with response
        err.status = 400;
        // forward error on to next middleware handler (the error handler defined below)
        next(err);
        return;
    }
    try {
        let reqAPI = unirest("GET", YAHOOFINANCE_API.URL + req.query.ticker);

        reqAPI.query({
            "comparisons": "MSFT,^VIX",
            "events": "div,split"
        });

        reqAPI.headers({
            "x-rapidapi-key": YAHOOFINANCE_API.TOKEN,
            "x-rapidapi-host": YAHOOFINANCE_API.HOST,
            "useQueryString": true
        });

        //let resAPI;
        reqAPI.end(function (resAPI) {
            if (resAPI.error) {
                console.log("Issue with API call, likely faulty ticker query.");
                res.json(null);
                return;
                //throw new Error(resAPI.error);
            }
            res.status(200);
            lastUpdateDate = new Date(resAPI.body.chart.result[0].meta.regularMarketTime*1000); //the api cuts off last 3 zeros, so times 1000
            lastUpdateString = lastUpdateDate.toLocaleDateString()
            //modifiedPriceHistory = resAPI.body.chart.result[0].indicators.quote[0].close.splice(90, 15)
            res.json({
                // data,
                ticker: resAPI.body.chart.result[0].meta.symbol,
                lastRefreshed: lastUpdateString,
                price: resAPI.body.chart.result[0].meta.regularMarketPrice,
                timeStamps: resAPI.body.chart.result[0].timestamp, // x-axis for graph
                priceHistory: resAPI.body.chart.result[0].indicators.quote[0].close // y-axis for graph
            });
            // res.json(
            //     resAPI.body
            // );
        });
    } catch (error) {
        console.log(error);
        // create error object with useful message
        const err = new Error('Error: Check server --- one or more APIs are currently unavailable.');
        // set status code to return with response
        err.status = 503;
        // forward error on to next middleware handler (the error handler defined below)
        next(err);
    }  
});

// uses heroku if available
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

// handle errors thrown by the application code
// NOTE, this actually must be defined LAST in order to catch any errors from others
app.use((err, req, res, next) => {
    console.log(err);
    // delegate to default Express error handler if HTTP header info has already been sent back
    if (res.headersSent) {
        next(err);
        return;
    }
    // set error status and return error message as JSON
    // since that is what the frontend is expecting
    res.status(err.status || 500).json({ message: err.message });
});
