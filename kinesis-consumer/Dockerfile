FROM node:7.6.0-alpine

RUN apk add --no-cache --virtual .persistent-deps \
        curl \
        bash \
    # Install node packages
    && npm install --silent --save-dev -g \
        kinesis-client-library

# Set up the application directory
COPY . /app/
WORKDIR /app

RUN ln -s /usr/local/lib/node_modules /app/node_modules

CMD ["/app/cmd.sh"]