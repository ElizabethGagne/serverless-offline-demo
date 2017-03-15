#!/bin/bash

echo "Running serverless in offline mode"
exec serverless --host 0.0.0.0 offline start