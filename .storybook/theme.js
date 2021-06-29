import { create } from '@storybook/theming';
import { version } from '../packages/core/package.json';
import { createTheme} from '../packages/brand/src';

//import logo from './public/forma-logo.png';

const theme = createTheme();
console.log("THEME: ", theme)
export default create({
  base: 'light',

  // Branding information
  brandTitle: `TresDoce-UI ${version}`,
  brandUrl: 'https://github.com/tresdoce/tresdoce-ui',
  //brandImage: logo,

  // Color palette
  colorPrimary: theme.palette.primary.default,

  // UI
  appBg: theme.palette.color.white,
  appContentBg: theme.palette.color.white,
  appBorderColor: theme.palette.gray[3],
  appBorderRadius: 4,

  // Fonts
  fontBase: theme.typography.family.primary,
  fontCode: 'monospace',

  // Text colors
  textColor: theme.palette.color.black,
  textInverseColor: theme.palette.color.white,

  // Toolbar default and active colors
  //barTextColor: tokens.colorTextLightest,
  barSelectedColor: theme.palette.primary.default,
  barBg: theme.palette.color.white,

  // Form colors
  //inputBg: tokens.colorWhite,
  //inputBorder: tokens.colorElementMid,
  //inputTextColor: tokens.colorTextDark,
  //inputBorderRadius: 2,
});
