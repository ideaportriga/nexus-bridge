var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var plugins = [];

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: "C:\\Siebel\\16.0.0.0.0\\Client\\public\\SCRIPTS\\siebel\\custom",
    filename: 'N19Helper.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
  },
  plugins: plugins
};

module.exports = config;
