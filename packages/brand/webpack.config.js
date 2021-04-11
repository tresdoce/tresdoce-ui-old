const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  context: path.resolve(__dirname, 'assets/less/'),
  entry: {
    'theme-default': './app.less',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(path.join(__dirname, './assets/css')),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'file-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          'file-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          'file-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 900000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
};
