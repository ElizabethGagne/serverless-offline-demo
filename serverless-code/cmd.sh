#!/bin/bash

if [ "$IS_RUN_KINESIS_LAMBDA_RUNNER" = "true" ]; then
    echo "Running the kinesis lambda runner"
    aws configure set default.region us-east-1
    aws configure set aws_access_key_id fake
    aws configure set aws_secret_access_key fake
    aws --endpoint-url $KINESIS_ENDPOINT kinesis create-stream --stream-name=$STREAM_NAME --shard-count=1
    sleep 5
    exec node kinesis_lambda_runner.js
else
    echo "Running serverless in offline mode"
    exec serverless --host 0.0.0.0 offline start
fi