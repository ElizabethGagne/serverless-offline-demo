'use strict';

import { Kinesis } from 'aws-sdk';

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://' + process.env.KINESIS_HOST + ':4567',
  };
}

const client: Kinesis = new Kinesis(options);


export interface IKinesisParameters {
  Data: string;
  PartitionKey: string;
  StreamName: string;
}

export interface ICallback {
  (error: any, result: any): void;
}

export function sendMsg(params: IKinesisParameters, callback: ICallback) {

  client.putRecord(params).promise().then((data) => {
    callback(undefined, { message: `Data successfully written to Kinesis stream ${params.StreamName}` });
  }).catch((err) => {
    callback(err, undefined);
  });
}
