const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

new webpack.EnvironmentPlugin(['BACKEND_HOST'])

module.exports = {
  entry: process.env.ENTRY,
  output: {
    path: path.join(__dirname, process.env.OUTPUT_DIR),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[id].[hash].js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)(\?.*)?$/,
        loader: "file-loader",
        options: {
          outputPath: "img/",
          name: "[name].[ext]"
        }
      }, 
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader",
        options: {
          outputPath: "fonts/",
          name: "[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};