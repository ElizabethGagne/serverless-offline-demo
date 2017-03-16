#!/bin/bash


if [ "$IS_OFFLINE" = "true" ]; then
    echo "Running consumer in offline mode"
    exec launch-kinesis-cluster \
        --consumer consumer.js \
        --table MyKinesisConsumerApp \
        --stream $KINESIS_STREAM \
        --aws.region $AWS_REGION \
        --dynamo-endpoint $DYNAMO_ENDPOINT \
        --kinesis-endpoint $KINESIS_ENDPOINT
else
    echo "Running consumer in production mode"
    exec launch-kinesis-cluster \
        --consumer consumer.js \
        --table MyKinesisConsumerApp \
        --stream $KINESIS_STREAM \
        --aws.region $AWS_REGION
fi