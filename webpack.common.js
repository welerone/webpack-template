/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: {
      import: './src/index.tsx',
      dependOn: ['react', 'react-dom'],
    },
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html', inject: true }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'public/js/[name].[contenthash:10].js',
    chunkFilename: 'public/js/[name].[id].[contenthash:10].js',
    clean: true,
  },
};
