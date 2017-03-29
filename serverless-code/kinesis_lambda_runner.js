const run = require('@rabblerouser/local-kinesis-lambda-runner');
const consumer = require('./stream/consumer').consumer;

run(consumer);
