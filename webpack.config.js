const webpack = require('webpack')
const path = require('path')

const config = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          "presets" : ["es2015", "react"]
        }
      }
    ]
  }
};

module.exports = config;