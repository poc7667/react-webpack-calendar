var path = require('path');
var webpack = require('webpack');


var config = module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for our application's frontend JS
  entry: './app/main.js',
  output: {
    filename: 'main.js'
  },

  resolve: {
      extensions: ['', '.js', '.jsx', '.ts']
  },  

  module: {
    loaders: [
         {
          test: /\.jsx?$/, 
          exclude: /node_modules/, 
          loaders: ['jsx-loader?insertPragma=React.DOM&harmony',"babel-loader"] }
    ]
  }

};