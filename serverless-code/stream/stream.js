'use strict'

const kinesis = require('kinesis-interface');
const uuid = require('uuid');

module.exports.notify = (event, context, callback) => {

    console.info('Received body: ' + event.body);
    const data = JSON.parse(event.body);
    if (typeof data.text !== 'string') {
        console.error('Validation Failed');
        callback(new Error('Invalid message format received.'));
        return;
    }

    const partitionKey = uuid.v1();
    const params = {
        Data: data.text,
        PartitionKey: partitionKey,
        StreamName: process.env.KINESIS_STREAM
    };

    // Send the notify to kinesis
    kinesis.sendMsg(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t send the notification.'));
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Item),
        };

        callback(null, response);

    });
};


