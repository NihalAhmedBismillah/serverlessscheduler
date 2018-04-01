'use strict'


exports.handler = (events, context, callback) => {

    console.log('I am runing task to update user or insert user====>');
    console.log('Events : ', JSON.stringify(events));
    //TODO: need to run user task here and ones done return callback.
    const response_success = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'ok'
        }),
    };
    return callback(undefined, response_success);
}