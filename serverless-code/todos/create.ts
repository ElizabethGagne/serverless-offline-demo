'use strict';

import * as uuid from 'uuid';
import * as dynamodb from './dynamodb';

export function create(event, context, callback){

  const timestamp = new Date().getTime();
  console.info('Received body: ' + event.body);
  const data = JSON.parse(event.body);
  if (typeof data.text !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Couldn\'t create the todo item.'));
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      text: data.text,
      checked: false,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  // write the todo to the database
  dynamodb.put(params).promise().then((result) => {
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };
    callback(null, response);
  }).catch((error) => {
    console.error(error);
    callback(new Error('Couldn\'t create the todo item.'));
    return;
  });
}
