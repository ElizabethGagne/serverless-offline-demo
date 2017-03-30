var path = require('path');

module.exports = {
  entry: {
      './todos/create':   './todos/create.ts',
      './todos/delete':   './todos/delete.ts',
      './todos/dynamodb': ['./todos/dynamodb.ts'],
      './todos/get':      './todos/get.ts',
      './todos/list':     './todos/list.ts',
      './todos/update':   './todos/update.ts',
      './stream/stream':  './stream/stream.ts',
      './stream/consumer':'./stream/consumer.ts'
  },
  target: 'node',
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
};