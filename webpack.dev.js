/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('node:path');

const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          plugins: ['react-refresh/babel'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:8]',
                exportLocalsConvention: 'camel-case-only',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              api: 'modern-compiler',
            },
          },
        ],
      },
    ],
  },
  watchOptions: {
    ignored: ['**/node_modules', '**/__tests__/**/*'],
  },
  devServer: {
    port: 3000,
    hot: true,
    open: false,
    historyApiFallback: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  optimization: {
    runtimeChunk: 'single',
  },
});
