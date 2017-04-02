/* eslint-env node */

const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'source/assets'),
  entry: {
    main: './main',
  },
  output: {
    path: path.resolve(__dirname, '.tmp/dist/static'),
    filename: '[name].js',
  },
  resolve: {
    root: path.resolve(__dirname, 'source/assets'),
    extensions: [
      '',
      '.js',
      '.scss',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          'css?sourceMap',
          'postcss',
          'resolve-url',
          `sass?sourceMap&includePaths[]=${path.resolve(__dirname, 'source/assets')}`,
        ]),
      },
      {
        test: /\.(png|svg|jpg)$/,
        loader: 'file?name=[path][name].[ext]',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  postcss: () => [autoprefixer(['> 1%', 'last 2 versions', 'Firefox ESR'])],
};
