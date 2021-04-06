import { create, themes } from '@storybook/theming';
import { addons } from '@storybook/addons';
import { version } from '../packages/core/package.json';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: `TresDoce-UI ${version}`,
    brandUrl: 'https://github.com/tresdoce/tresdoce-ui',
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
  }),
})
