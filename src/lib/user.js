/**
 * Import npm packages
 */
const Joi = require('joi');
const _ = require('lodash');
const monogdbInst = require('./mongodbase');
const shortid = require('shortid');
const COLLECTION_NAME = 'UserDocs'
/**
 * Descript : ths
 */
class ClsUser {

    constructor(firstName, lastName, emailId, profileUrl, DOB) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.profileUrl = profileUrl;
        this.DOB = DOB;
    }
    static validateUserModel(user) {

        const schema = Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            emailId: Joi.string().email().required(),
            profileUrl: Joi.string(),
            DOB: Joi.string().required()
        })
        const result = Joi.validate({
            firstName: user.firstName,
            lastName: user.lastName, emailId: user.emailId, profileUrl: user.profileUrl, DOB: user.DOB
        }, schema);
        return (error) ? true : false;
    }

    static validateRequest(event) {
        event.body = (event.body) ? JSON.parse(event.body) : undefined;
        return (event.body && event.body.user) ? true : false;
    }

    static saveUser(event, callback) {

        if (!this.validateRequest(event)) {
            return callback('Request not have body', undefined);
        }
        let user = event.body.user;

        if (!this.validateUserModel(user)) {
            return callback('Invalid request', undefined);
        }
        monogdbInst.dbConnect((error, db) => {
            if (error) {
                return callback(error, undefined);
            }
            let collection = db.collection('UserDoc');
            user['_id'] = shortid.generate();
            collection.save(user, (err, result) => {
                if (err) {
                    return callback(error, undefined);
                }
                db.close();
                callback(undefined, 'Data saved!');
            });
        });
    }

    static getUser(event, callback) {

    }

    static updateUser(event, callback) {

    }

    static deleteUser(event, callback) {

    }
}

module.exports = ClsUser;