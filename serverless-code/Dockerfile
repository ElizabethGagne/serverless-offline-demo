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
        uuid


# Set up the application directory
COPY . /app
WORKDIR /app

RUN cd /app/kinesis && npm pack && npm install -g kinesis-interface-1.0.0.tgz

EXPOSE 3000

CMD ["/app/cmd.sh"]