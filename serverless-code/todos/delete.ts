'use strict';

import * as dynamodb from './dynamodb';

export function mydelete(event, context, callback){

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id
    }
  };


  // delete the todo from the database
  dynamodb.delete(params).promise().then(() => {
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify({})
    };

    callback(null, response);

  }).catch((error) => {
    console.error(error);
    callback(new Error('Couldn\'t remove the todo item.'));
    return;
  });

}
