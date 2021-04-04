module.exports = {
  stories: [
    //'../packages/brand/src/**/*.stories.@(tsx|ts|jsx|js|mdx)',
    '../packages/core/src/**/*.stories.@(tsx|ts|jsx|js|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-docs/register',
    '@storybook/addon-backgrounds',
    '@storybook/addon-knobs',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
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
    '@storybook/addons',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
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
