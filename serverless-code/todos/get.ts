'use strict';

import * as dynamodb from './dynamodb';

export function get (event, context, callback){

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  dynamodb.get(params).promise().then((result) => {
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  }).catch((error) => {
    console.error(error);
    callback(new Error('Couldn\'t fetch the todo item.'));
    return;
  });
};
