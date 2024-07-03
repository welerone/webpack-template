import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'node:path';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const dirname = import.meta.dirname;

export default merge(commonConfig, {
  mode: 'production',
  devtool: 'nosources-source-map',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: path.join(dirname, 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              importLoaders: 1,
              modules: {
                localIdentName: '[hash:base64:10]',
                namedExport: true,
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          'postcss-loader',
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'public/css/[name].[contenthash:10].css',
    }),
  ],
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
});
