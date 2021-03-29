const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  stories: [
    '../packages/core/src/**/*.mdx',
    '../packages/core/src/**/*.stories.@(tsx|ts|jsx|js)',
  ],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addons',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config) => {
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
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../', 'packages/**/*'),
          },
          {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
            include: path.resolve(__dirname, '../', 'packages/**/*'),
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
            include: path.resolve(__dirname, '../', 'packages/**/*'),
          },
          {
            test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 900000,
              },
            },
            include: path.resolve(__dirname, '../', 'packages/**/*'),
          },
          {
            //test: /\.(stories|story)\.mdx$/,
            test: /\.mdx$/,
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
    };

    return config;
  },
};
