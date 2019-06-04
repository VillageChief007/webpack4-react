const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
  module.exports = {
    entry: './src/index.js',
    output: {
      filename: '[name]-[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader','css-loader', 'sass-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[hash]-[name].[ext]',
              // publicPath: './images',
              outputPath: './images',
            },
          }]
        },
        {
          enforce: "pre",
          test: /\.js$|\.jsx$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options:{
            formatter: require("eslint-friendly-formatter"),
          }
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        }
     ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        filename: 'index.html',
        template: 'index.html',
      })
    ]
  };