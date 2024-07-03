import path from 'node:path';

import { merge } from 'webpack-merge';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import commonConfig from './webpack.common.js';

const dirname = import.meta.dirname;

export default merge(commonConfig, {
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: path.join(dirname, 'src'),
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
