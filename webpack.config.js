const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry: './src/index.js',
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  devServer: {
    // contentBase: path.resolve(__dirname, 'build'),   // not use because HtmlWebPackPlugin
    port:7000,
    // host:'0.0.0.0',
    inline: true,
    hot: true,
    overlay: true, // 浏览器打印错误
    stats: 'errors-only', // 编译terminal只打印错误
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader'
            }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      // title: 'Set Up Project',
      // filename: './index.html',
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    })
  ]
};