const webpack = require('webpack')
const path = require('path')

const config = {
  entry: './src/react-tabs.js',
  output: {
    path: __dirname,
    filename: './dist/react-tabs.js'
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