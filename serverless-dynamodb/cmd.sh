#!/bin/bash

echo "Running dynamodb locally"
exec serverless dynamodb start --inMemory true --migrate true