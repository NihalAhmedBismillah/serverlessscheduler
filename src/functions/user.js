//
const User = require('./../lib/user');


exports.handler = (event, context, callback) => {

    switch (event.httpMethod) {

        case 'POST': {
            // save data in database
            User.saveUser(event, (error, result) => {
                if (error) {
                    const response_error = {
                        statusCode: 501, body: JSON.stringify({ message: error }),
                    };
                    callback(undefined, response_error);
                } else {
                    const response_success = {
                        statusCode: 200, body: JSON.stringify({ message: result }),
                    };
                    callback(undefined, response_success);
                }
            });
            break;
        }
        case 'GET': {
            //TODO; 
            const response_success = {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'ok'
                }),
            };
            return callback(undefined, response_success);
            break;
        }
        case 'PUT': {
            //TODO;
            break;
        }
        case 'DELETE': {
            //TODO; 
            break;
        }
        default: {
            callback(undefined, { statusCode: 501, data: 'Not Implemented' });
            break;
        }
    }
}