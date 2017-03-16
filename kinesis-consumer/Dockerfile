FROM node:7.6.0-alpine

RUN apk add --no-cache --virtual .persistent-deps \
        curl \
        bash \
    # Install node packages
    && npm install --silent --save-dev -g \
        kinesis-client-library

# Set up the application directory
COPY . /app
WORKDIR /app

CMD ["/app/cmd.sh"]