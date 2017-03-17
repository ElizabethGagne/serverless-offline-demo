#!/bin/bash

echo "Starting serverless offline..."
docker-compose up --build
#sleep 30
#echo "Creating kinesis streams"
#aws --endpoint-url http://0.0.0.0:4567/ kinesis create-stream --stream-name=dev-data-receiver --shard-count=1
#docker-compose logs -f