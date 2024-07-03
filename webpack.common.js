import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const dirname = import.meta.dirname;

export default {
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
      '@': path.resolve(dirname, 'src'),
    },
  },
  output: {
    path: path.resolve(dirname, 'build'),
    publicPath: '/',
    filename: 'public/js/[name].[contenthash:10].js',
    chunkFilename: 'public/js/[name].[id].[contenthash:10].js',
    clean: true,
  },
};
