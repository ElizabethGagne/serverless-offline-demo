'use strict';

import * as AWS from 'aws-sdk';

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://' + process.env.DYNAMO_HOST + ':8000',
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

export = client;
