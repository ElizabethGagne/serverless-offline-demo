'use strict';

import * as dynamodb from './dynamodb';

export function list(event, context, callback){

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };

  // fetch all todos from the database
  dynamodb.scan(params).promise().then((result) => {
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  }).catch((error) => {
    console.error(error);
    callback(new Error('Couldn\'t fetch the todos'));
    return;
  });

};
