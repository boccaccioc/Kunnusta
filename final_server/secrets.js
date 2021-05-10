/*
 * Contains all app's secrets
 *
 * @author Colin Boccaccio
 */

exports.ALPHAVANTAGE_API = {
    URL: 'https://www.alphavantage.co/query',
    TOKEN: 'TVH65HSVTZ3C8EQX',
};
exports.YAHOOFINANCE_API = {
    URL: 'https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/',
    HOST: 'yahoo-finance-low-latency.p.rapidapi.com',
    TOKEN: '122dfbc626msh0817f95d8ac2483p1abea1jsnc427203aa52d',
};

// WARNING: really lousy encryption key!
exports.COOKIE_ENCRYPTION_KEY = 'SECRET';

// This object was downloaded directly from Google Cloud Service Credentials Console to configure access
//   https://console.cloud.google.com/apis/credentials
exports.OAUTH = {"web":{"client_id":"1043599487623-lqga81ff2fodq23vi842tvrrnos9edk8.apps.googleusercontent.com","project_id":"kunnusta","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"_X4JNrmOr2Gv8gqXbRG7_o12","redirect_uris":["http://localhost:8080/api/auth/google/redirect","https://gentle-basin-50134.herokuapp.com/api/auth/google/redirect"]}};

// These should represent the final URLs for your front- and backend projects
exports.DEPLOYED_URLS = {
    // TODO: change to Heroku and GitLab URLs, with a trailing slash
    SERVER: 'https://gentle-basin-50134.herokuapp.com/',
    VIEW: 'https://compsci290_2021spring.dukecs.io/portfolio_cmb171/FinalProject/final_ui/dist/',
};

//firebase
exports.FIREBASE_CONFIG = {
    "type": "service_account",
    "project_id": "kunnusta",
    "private_key_id": "c770521ba6bc39c8ea556a0496fedea6dbbc0401",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC8jbnHH3iHyyaH\nQOOQUoQ/PmjM5ssVY4gJ6+M6nkd2JDeLDpU/MppePaPLrddb/Dd7ufa7Cg4yGByi\nMZM58dmY9BdRmlwNyKQ2AnDsYG3aRCr6vSZX6FwILsxoWWB3Hk5mMOIhWg/7ob93\n3kMt3W/EPtKbn9aHaTKkoun0UoXxqMEWsm+e1koxtF+o5C24u1e5hvNTqNT8DE9l\nPYepytOPQ+j8aDyrcb/hgHrDf3aamtcW679rNTAtTb2pEvpnKB25BAZeW3TaqftN\nnhqbymR2TDWWtC9Za407EiZsd7Rx92mgq8jlttlt7VK74T4i/azpvXskdWob/2rQ\n54UzTVAvAgMBAAECgf9ZQ/5p4+QpwYiIGoACZufPwMNkF6WoQxO8tt+DfeRlmJ4F\nOdYhUa9xU8vLPrS0BZ5vJ7EKnPlL0Vh0iUKqS4XE9M9A2h4bPPyxYAdjWcYXP6wn\n2J62YCIZ0PXrMjTNvDH3X6+bjn4uFKHW/pCtnGlLEpmPXEXCuM6tuK0YpPQvEJ9O\nclqw1+9fRXa2eD292FP+DoXsVF/8wxn8/VYoXXxNWGAOCex8PFEaCNQh9WT1rXnJ\nM8m9gdXYf3APawTmds2dXC5Y+G812VBrpMp93oJ7XTwU28pLWsMtfE20WpvG7ZDh\npddC/5mMKm4dVjJmODJgDm4cP/jHmvwQfSaMzyUCgYEA5vK1TS0PNQif5AMAu6DW\nKfpef2tqdF5eUJx955v8vKf6bjIlgNHI/l7oc0F4b8GUQT2TkH/z8fbe4VYCdv1n\nTRCjvWJcKmMCTSHw341O2Kfy0d/cyAnVe4ATHP3HPeG+2vpKSIKZbk3OdAVVB/FK\nxkY9u+6otr9LYWYWl9g/pZsCgYEA0QG/j1piYrfwGsHoIEkr6Uhg2ks7fvj5T2/x\nA+o/eDEI9ejuMIfhr7hpWTGS74vvpYI6GM1MipBvslsFYsxOkDUX4k0eQmnnp04F\nGYhbBcs6XUDME8DnOxw2rCHMPNFTEpwBe5i4ASMgaWO54jjeqBZmgyMlgBuJ83Ac\n5HdBUv0CgYEAi6y2Ydqim9x/dxMp2lBHtlOp2z5Hv+FjATXkH7ODg0XEe+jwLZyz\nBsS3qR0rjctxspNfL8Fy9B/uZDH0g6p2U3GA1gUq4KfIuIWSfGGmEfphLPVLPeBU\nsMCgzqPdYFurZhyB2KDD0qZT+m9PIeKY6pmItKR+fSfsmxd3CpbKx4kCgYBfGNeL\nJ0natux1kELI5eIn67m9uTth43C0Vy+nY17rlgwIr6ooxLrIVDUC006S1e39NYqv\nnEG2Tk+0LDwAHwukC7RJUGNzPnKbqiEh4+vecACnS4NPfZb4SzcJDPu7tFaDAh6e\nmPcn9U6bBTgfmVadzktoYYZ/iogzDpDm1ugPFQKBgAfuJXjhz3ms7Ouvd6Esn4sq\ngGMRIyjH/C8nYpE5OaSRUCs9mkjVxJVqC4+AHxqFiBAikFaDdYkG4QOIx/mH8j57\nOzfisGx6qaN5kqsLmXq3n4KlmuY1Eu7cmGoSy1mw7Kxj3BNMbQQqofvCOuD2ce9N\nv3DkN/3vII3c0q+pIlRg\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-yxbog@kunnusta.iam.gserviceaccount.com",
    "client_id": "100369197351547192403",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yxbog%40kunnusta.iam.gserviceaccount.com"
};