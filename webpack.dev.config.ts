import path from 'path';
import { merge } from 'webpack-merge';
import { Configuration as WebpackConfig } from 'webpack';
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';
import common from './webpack.common.config';

type Configuration = WebpackConfig & {
  devServer?: WebpackDevServerConfig;
};

const devConfig: Configuration = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash:8].bundle.js',  // '[name].bundle.js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map', // eval-source-map
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    open: true,
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  },
};
const config = merge<Configuration>(common, devConfig);

export default config;
