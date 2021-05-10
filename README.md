# portfolio

This folder represnts the submission to the Final project.

## Name: Colin Boccaccio

## Setup Instructions

Visit the link provided on the main portfolio page, and click login and refresh the page. From there you can add, delete, and change the order of your stocks. If hosting locally, run npm install in both the server and UI file, and run the local-only-with-google-authorization script when loading the server, also change the secrets in the server where applicable.

NOTE: If api calls run out, or you want to use the example data saved locally, comment out the two lines that invovle fetching from yahoo and making it JSON, and uncomment the lines setting the data as example data in the following three spots in App.vue: getStockQuery(), updateData(), and mounted.

### Data Authenticity

All of the data used comes from the "Yahoo Finance Low Latency API" and all user data is stored securely in a Google Firebase Realtime Database.

### Local Database Structure

Data in Firebase was organized by having "data" holding everything, with "data.users" being all users that have signed in to the sight. For each of these users, they have "stocks" which is the list of stocks that they have on their home page in the order that they are displayed and "profile", which consists of "adminStatus", a boolean balue indicating if the user is an admin.

### Goals for Each User Type

#### Guest:

See basic financial data for most popular companies.

#### Signed In User:

See basic financial data for companies that have been bookmarked as of interest. Create a customized homepage that saves location of different metrics the user wants to see.

#### Admin:

Can see the data for all existing users, including if those users have administrator status and the stocks those users have on their home page

### Anticipated Bad Inputs and Error Conditions

The search for a stock feature will make a request to the server for the data of the search query, and if no data is recieved, a page is displayed telling the user that the stock they searched for does not exist or is not available using the API.

### Framework Choices

TODO: Explain why I chose the frameworks I did (PROS and CONS)

### Timeline

Start Date: 3/22/2021

Finish Date: 4/28/2021

Hours Spent: 40+


### Collaboration

People consulted: 0

Resources used: Vue-Draggable for drag and droping, Vue-Trend-Charts to display the stock data history, Google OAuth for Sign in, Heroku for hosting the server, Bootstrap for basic styling

Asset attributions: N/A


### Assignment Notes

Known Bugs: When a new user creates an account, they need to refresh the page before being able to see their home page. I attempted to have an automatic page refresh, but this caused issues. 
Extra credit:N/A


### Impressions

I really enjoyed working on this project, and especially towards the end of the timeline I started to feel very confident in how to efficiently debug issues in both my server and UI.