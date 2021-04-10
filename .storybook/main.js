module.exports = {
  stories: [
    '../packages/core/src/**/*.stories.@(tsx|ts|jsx|js)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: true,
        controls: true,
        docs: true,
        viewport:true,
        toolbars:true
      }
    },
    '@storybook/addon-knobs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-docs/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-info',
    '@storybook/react'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      esModuleInterop: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
};
