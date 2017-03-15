'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://' + process.env.KINESIS_HOST + ':4567',
  };
}

var client = new AWS.Kinesis(options);

module.exports = client;
