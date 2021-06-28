import { create } from '@storybook/theming';
import { version } from '../packages/core/package.json';

//import logo from './public/forma-logo.png';

export default create({
  base: 'light',

  // Branding information
  brandTitle: `TresDoce-UI ${version}`,
  brandUrl: 'https://github.com/tresdoce/tresdoce-ui',
  //brandImage: logo,

  // Color palette
  //colorPrimary: tokens.colorPrimary,

  // UI
  //appBg: tokens.colorElementLightest,
  //appContentBg: tokens.colorWhite,
  //appBorderColor: tokens.colorElementLight,
  //appBorderRadius: 4,

  // Fonts
  fontBase: '"Lato", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  // Text colors
  //textColor: tokens.colorTextDark,
  //textInverseColor: tokens.colorWhite,

  // Toolbar default and active colors
  //barTextColor: tokens.colorTextLightest,
  //barSelectedColor: tokens.colorPrimary,
  //barBg: tokens.colorWhite,

  // Form colors
  //inputBg: tokens.colorWhite,
  //inputBorder: tokens.colorElementMid,
  //inputTextColor: tokens.colorTextDark,
  //inputBorderRadius: 2,
});
