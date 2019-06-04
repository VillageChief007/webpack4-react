const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // host: '127.0.0.1',
    // port: '3007'
    // disableHostCheck: true,
    allowedHosts: [
      'localhost',
    ],
    proxy: {
      target: 'http://api.douban.com',
      context: ['/v2'],
      changeOrigin: true,
    },
  },
});
