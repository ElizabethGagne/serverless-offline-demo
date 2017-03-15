FROM node:7.7.2

RUN npm install --silent --save-dev -g \
        serverless \
        serverless-dynamodb-local \
        serverless-offline \
        aws-sdk

RUN apt-get update
RUN apt-get install -y -q default-jre

# Set up the application directory
COPY . /app
WORKDIR /app

# Install local dynamodb
RUN serverless dynamodb install

EXPOSE 8000

CMD ["/app/cmd.sh"]