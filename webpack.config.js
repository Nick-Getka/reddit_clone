const webpack = require('webpack');
const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname+'/app/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve('build')
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "react"]
        },
        test: /\.jsx?$/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './app/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new LiveReloadPlugin({appendScriptTag: true})
  ]
};
