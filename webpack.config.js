const webpack = require('webpack')
const path = require('path')

const config = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          "presets" : ["es2015", "react"],
          "plugins" : ["react-hot-loader/babel"]
        }
      }
    ]
  }
};

module.exports = config;