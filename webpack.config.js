const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const data = require('./src/assets/js/data.js');

module.exports = {
  entry:  {
    'main': './src/assets/js/router',
  },
  output: {
    path: 'dist',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      //   include: __dirname + '/src'
      // },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: __dirname + '/src'
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new StaticSiteGeneratorPlugin('main', data.routes, data)
  ]
};