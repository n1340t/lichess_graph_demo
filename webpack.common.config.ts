import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration as WebpackConfig } from 'webpack';

const config: WebpackConfig = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    clean: true,
  },
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(vendor|node_modules|dist)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
};

export default config;
