
/**
 * Import npm packages
 */
const MongoClient = require('mongodb').MongoClient;
const _ = require('lodash');
//TODO : Need to remove comman yml file 
const MONGO_CONN_STRING = 'mongodb://127.0.0.1:27017/Users';
/**
 * Description : mangodb database operation
 */
class ClsMongodb {

    static dbConnect(callback) {

        MongoClient.connect(MONGO_CONN_STRING, function (err, db) {

            if (err) {
                console.log('Database connection error occur!', JSON.stringify(err));
                //try 
                setTimeout(() => {
                    this.dbConnect();
                }, 1000);
            }
            else {
                console.log('Database connection ok!');
                callback(undefined, db);
            }
        });
    }
}

module.exports = ClsMongodb;
