FROM node:7.7.2

RUN npm install --silent --save-dev -g \
        serverless@1.9.0 \
        serverless-dynamodb-local@0.2.20 \
        serverless-offline@3.13.1 \
        aws-sdk \
        uuid \
        typescript \
        typings \
        @types/aws-sdk \
        @types/es6-promise \
    && apt-get update && apt-get install -y -q default-jre

# Set up the application directory
COPY . /app/
WORKDIR /app

RUN ln -s /usr/local/lib/node_modules /app/node_modules && cd /app/kinesis && tsc && npm pack && npm install -g kinesis-interface-1.0.0.tgz
RUN serverless dynamodb install

EXPOSE 3000
EXPOSE 8000

CMD ["/app/cmd.sh"]