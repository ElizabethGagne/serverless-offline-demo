const run = require('@rabblerouser/local-kinesis-lambda-runner');
const consumer = require('./stream/consumer');

run(consumer);
