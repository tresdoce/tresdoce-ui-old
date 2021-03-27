const path = require('path');

module.exports = {
  stories: [
    '../packages/core/src/**/*.stories.mdx',
    '../packages/core/src/**/*.stories.@(tsx|ts|jsx|js)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addons',
    '@storybook/addon-viewport'
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
        ],
      },
      resolve: {
        ...config.resolve,
        extensions: [
          ...config.resolve.extensions,
          '.ts', '.tsx',
        ],
      },
    };
    /*config.resolve.alias = {
      ...config.resolve.alias,
      '@tresdoce-ui/core': path.resolve(__dirname,'../','packages/core/src')
    }*/

    return config;
  },
};
