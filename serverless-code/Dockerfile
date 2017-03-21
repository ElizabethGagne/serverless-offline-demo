FROM node:7.6.0-alpine

RUN apk add --no-cache --virtual .persistent-deps \
        curl \
        bash \
    # Install node packages
    && npm install --silent --save-dev -g \
        serverless \
        serverless-dynamodb-local \
        serverless-offline \
        aws-sdk \
        uuid \
        typescript \
        typings \
        @types/aws-sdk \
        @types/es6-promise


# Set up the application directory
COPY . /app/
WORKDIR /app

RUN ln -s /usr/local/lib/node_modules /app/node_modules && cd /app/kinesis && tsc && npm pack && npm install -g kinesis-interface-1.0.0.tgz

EXPOSE 3000

CMD ["/app/cmd.sh"]