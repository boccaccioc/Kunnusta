/*
 * database hosted through firebase
 */

const admin = require('firebase-admin');

// provide global access to initialized app database
const { FIREBASE_CONFIG } = require('./secrets');
admin.initializeApp({
    credential: admin.credential.cert(FIREBASE_CONFIG),
    databaseURL: `https://${FIREBASE_CONFIG.project_id}-default-rtdb.firebaseio.com`,
});
const DB = admin.database();

const adminGoogleIDs = ["107105047789934988228"]; // just my google ID


// actual data structure that the rest of the program will interact with
module.exports = {
    // could store a local copy of the database data to reduce time querying,
    // but note that any "extra" data only here in server will be wiped out 
    // periodically when Heroku restarts server
    dataRef: DB.ref('data'),

    // return all the data
    async getData () {
        console.log(`Getting data at ${this.getTimeStamp()}`);
        // NOT the data directly, get current snapshot of all data to process locally
        //const snapshot = await this.dataRef.once('value');
        const snapshot = await (await DB.ref(`data/users`).get()).toJSON();
        console.log(snapshot);
        // return actual data held within snapshot (also has convenience functions like forEach to process the data)
        return snapshot; //.val();
        // note could catch possible errors here, but should be caught be "general" error middleware
    },
    // data of just one user
    async getUserData (id) {
        console.log(`Getting data at ${this.getTimeStamp()} for user ${id}`);
        //const snapshot = await this.dataRef.child(`users/${id}/stocks`);
        const snapshot = await (await DB.ref(`data/users/${id}`).get()).toJSON();
        console.log("getting user data snapshot");
        console.log(snapshot);
        // return actual data held within snapshot (also has convenience functions like forEach to process the data)
        return snapshot; //.val();
        // note could catch possible errors here, but should be caught be "general" error middleware
    },
    async doesUserExist (id) {
        console.log(`Getting data at ${this.getTimeStamp()} to see if user ${id} exists`);
        //const snapshot = await this.dataRef.child(`users`);
        const snapshot = await (await DB.ref(`data/users`).get()).toJSON();
        if(snapshot?.[id]?.stocks){
            console.log("User exists? -- TRUE");
            //await updateAdminStatus(id);
            if(adminGoogleIDs.includes(id)){ //checks if this id is in the array of admin id's
                await this.dataRef.child(`users/${id}/profile`).set({
                         adminStatus: true
                     });
            } else {
                await this.dataRef.child(`users/${id}/profile`).set({
                    adminStatus: false
                });
            }
            return true;
        }

        console.log("User exists? -- FALSE");
        return false;
       
    },
    async createNewUser (id) {
        console.log('here in createNewUser');
        console.log(`Creating new user with an ID of ${id}`);
        // if(id === '<none>'){
        //     id = 'guest';
        // }
        //await this.dataRef.child(`users`).push(id);
        console.log(adminGoogleIDs);
        console.log(adminGoogleIDs.includes(id));

        //await updateAdminStatus(id);
        if(adminGoogleIDs.includes(id)){ //checks if this id is in the array of admin id's
            await this.dataRef.child(`users/${id}/profile`).set({
                     adminStatus: true
                 });
        } else {
            await this.dataRef.child(`users/${id}/profile`).set({
                adminStatus: false
            });
        }

         await this.dataRef.child(`users/${id}/stocks`).set({
             0:'AAPL'
         });
        //this.addStock(id, 'AAPL'); // initilizing the user to have some stocks to start
        //this.addStock(id, 'AMD');
    },
    async updateAdminStatus(id){
        console.log('updating admin status');
        if(adminGoogleIDs.includes(id)){ //checks if this id is in the array of admin id's
            await this.dataRef.child(`users/${id}/profile`).set({
                     adminStatus: true
                 });
        } else {
            await this.dataRef.child(`users/${id}/profile`).set({
                adminStatus: false
            });
        }
    },
    // add new stock to user at the given id

    // async addStock (id, newStock) {
    //     console.log(`Adding new stock ${newStock} to user ${id}`);
    //     // get pointer to data collection and add to it like a JavaScript array
    //     // (but it is really an object with Firebase generated index keys)
    //     await this.dataRef.child(`users/${id}/stocks`).push(newStock);
    //     // note could catch possible errors here, but should be caught be "general" error middleware
    // },

    async pushStockList (id, stockArray){
        await this.dataRef.child(`users/${id}`).set({
                stocks:stockArray
        });
        if(adminGoogleIDs.includes(id)){ //checks if this id is in the array of admin id's
            await this.dataRef.child(`users/${id}/profile`).set({
                     adminStatus: true
                 });
        } else {
            await this.dataRef.child(`users/${id}/profile`).set({
                adminStatus: false
            });
        }
    },
    getTimeStamp () {
        return new Date().toISOString().slice(0, 19).replace('T',' ');
    }
};
