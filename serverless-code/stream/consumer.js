'use strict';

const consumer = (event, context, callback) => {

    // print out the event information on the console (so that we can see it in the CloudWatch logs
    console.log("The following data was written to the Kinesis stream data-receiver:\n" + JSON.stringify(event.Records[0].kinesis, null, 2));
    var data = new Buffer(event.Records[0].kinesis.data, 'base64').toString('utf8');
    console.log("Received msg: " + data);
    callback(null, { event });
}

module.exports = consumer;
