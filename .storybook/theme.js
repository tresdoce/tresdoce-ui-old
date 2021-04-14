import { create } from '@storybook/theming';
import { version } from '../packages/core/package.json';

export default create({
  base: 'light',
  brandTitle: `TresDoce-UI ${version}`,
  brandUrl: 'https://github.com/tresdoce/tresdoce-ui',
  fontBase: '"Helvetica", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',
});
