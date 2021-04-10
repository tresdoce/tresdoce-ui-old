const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  context: path.resolve(__dirname, 'assets/styles/'),
  entry: {
    'theme-classic': './classic.scss',
    'theme-eminent': './eminent.scss',
    'theme-move': './move.scss',
  },

  module: {
    rules: [
      {
        test: /.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAll: true,
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(path.join(__dirname, './assets-brick/css')),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
};
