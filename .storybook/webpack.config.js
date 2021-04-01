const path = require('path');
const webpack = require("webpack");
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = async ({ config }) => {
  /*console.log(config)
  config = {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(ts|tsx)$/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader")
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../', 'packages/!**!/!*'),
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
          include: path.resolve(__dirname, '../', 'packages/!**!/!*'),
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            'postcss-loader',
          ],
          include: path.resolve(__dirname, '../', 'packages/!**!/!*'),
        },
        {
          test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 900000,
            },
          },
          include: path.resolve(__dirname, '../', 'packages/!**!/!*'),
        },
        {
          test: /\.(stories|story)\.mdx$/,
          use: [
            {
              loader: 'babel-loader',
              // may or may not need this line depending on your app's setup
              options: {
                plugins: ['@babel/plugin-transform-react-jsx'],
              },
            },
            {
              loader: '@mdx-js/loader',
              options: {
                compilers: [createCompiler({})],
              },
            },
          ],
        },
        {
          test: /\.(stories|story)\.(tsx|ts|jsx|js)$/,
          loader: require.resolve('@storybook/source-loader'),
          exclude: [/node_modules/],
          enforce: 'pre',
        }
      ],
    },
    resolve: {
      ...config.resolve,
      extensions: [
        ...config.resolve.extensions,
        '.ts', '.tsx',
      ],
      alias: {
        '@tresdoce-ui/brand': path.resolve(__dirname, '../', 'packages/brand/src'),
        '@tresdoce-ui/core': path.resolve(__dirname, '../', 'packages/core/src'),
      },
    },
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        SC_DISABLE_SPEEDY: true
      })
    ]
  }*/


  return config;
};
