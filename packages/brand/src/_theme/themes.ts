import { colors } from './colors';
import { properties, variants } from './fonts';
import { themeImages } from './images';
import { spacing } from '../theme/spacing';

export interface Theme {
  images?: any;
  colors?: any;
  spacing?: any;
  borders?: any;
  zindex?: any;
  animation?: any;
  typography?: any;
  breakpoints?: any;
  shadows?: any;
  scss?: any;
}

const {
  fontFamily,
  letterSpacing,
  weight,
  size,
  align,
  ...fontProperties
} = properties;

const eminent: Theme = {
  images: themeImages('eminent'),
  colors: {
    primary: colors.eminent.primary,
    primary_light: colors.eminent.light,
    primary_dark: colors.eminent.dark,
    white: colors.white.white100,
    /*GUI*/
    eminent20: colors.eminent.eminent20,
    //light: colors.eminent.eminent40,
    bright: colors.eminent.eminent50,
    deep: colors.eminent.eminent55,
    //dark: colors.eminent.eminent60,
    alpha08: colors.eminent.eminent008,
    alpha016: colors.eminent.eminent016,
  },
  scss: { name: 'eminent' },
};

const classic: Theme = {
  images: themeImages('classic'),
  colors: {
    primary: colors.classic.primary,
    primary_light: colors.classic.light,
    primary_dark: colors.classic.dark,

    /*GUI*/
    orange10: colors.orange.orange10,
    orange20: colors.orange.orange20,
    light: colors.orange.orange40,
    bright: colors.orange.orange50,
    deep: colors.orange.orange55,
    dark: colors.orange.orange60,
    orange65: colors.orange.orange65,
    orange50: colors.orange.orange50,
    alpha08: colors.orange.orange008,
    alpha016: colors.orange.orange016,
    grey30: colors.grey.grey30,
    grey50: colors.grey.grey50,
    black50: colors.black.black50,
    black20: colors.black.black20,
    white: colors.white.white100,
  },
  scss: { name: '' },
};

const prefer: Theme = {
  images: themeImages('prefer'),
  colors: {
    primary: colors.prefer.primary,
    primary_light: colors.prefer.light,
    primary_dark: colors.prefer.dark,
  },
  scss: { name: '' },
};

const move: Theme = {
  images: themeImages('move'),
  colors: {
    primary: colors.move.primary,
    primary_light: colors.move.light,
    primary_dark: colors.move.dark,
    white: colors.white.white100,
    /*GUI*/
    move20: colors.move.move20,
    light: colors.move.move40,
    bright: colors.move.move50,
    deep: colors.move.move55,
    dark: colors.move.move60,
    move70: colors.move.move70,
    alpha08: colors.move.move008,
    alpha016: colors.move.move016,
  },
  scss: { name: 'move' },
};

const base: Theme = {
  breakpoints: {
    xs: '359px',
    sm: '767px',
    md: '1023px',
    lg: '1279px',
  },
  spacing,
  animation: {
    animate150: '150ms ease-in-out',
    animate170: '170ms ease-in-out',
    animate200: '200ms ease-in-out',
    animate350: '350ms ease-out',
    headerAnimate: '350ms ease-out',
  },
  borders: {
    radius8: '8px',
    radius4: '4px',
  },
  zindex: {
    /**se utiliza para el menu dropdown**/
    zindex1: '1',
    /**se utiliza para el topbar**/
    zindex2: '2',
    /**se utiliza para el sidedrawer**/
    zindex3: '3',
    /**se utiliza para el modal**/
    zindex4: '4',
  },
  typography: {
    ...fontProperties,
    fontFamily,
    fontletterSpacing: letterSpacing.space0,
    fontWeight: weight.normal,
    variants,
    size,
    weight,
    align,
  },
  colors: {
    transparent: colors.transparent,
    white: colors.white,
    black: colors.black,

    grey_bg_dark: colors.neutrals.bg_dark,
    grey_bg_light: colors.neutrals.bg_light,
    grey_text_dark: colors.neutrals.text_dark,
    grey_text_light: colors.neutrals.text_light,

    state_error: colors.states.error,
    state_error_ligth: colors.states.error_light,
    state_success: colors.states.success,
    state_success_ligth: colors.states.success_light,
    state_warning: colors.states.warning,
    state_info: colors.states.info,
    state_warning_ligth: colors.states.warning_light,
    state_info_ligth: colors.states.info_light,

    /*overlays color*/
    overlay_bg_color: 'rgba(43, 43, 43, 0.6)',

    /*GUI***********************************************************/
    overlayScreen: colors.overlay.screen,
    overlayLight: colors.overlay.light,
    overlayDark: colors.overlay.dark,

    // Blacks colors
    black20: colors.black.black20,
    black30: colors.black.black30,
    black40: colors.black.black40,
    black50: colors.black.black50,
    black60: colors.black.black60,
    darkBlack: colors.dark.dark,

    grey30: colors.grey.grey30,
    grey40: colors.grey.grey40,
    grey50: colors.grey.grey50,
    grey60: colors.grey.grey60,
    grey70: colors.grey.grey70,
    grey80: colors.grey.grey80,

    darker: colors.dark.dark,

    white100: colors.white.white100,
    white70: colors.white.white70,
    white80: colors.white.white80,
    whiteAlpha08: colors.white.alpha08,
    whiteAlpha12: colors.white.alpha12,
    whiteAlpha16: colors.white.alpha16,
    whiteAlpha64: colors.white.alpha64,

    // Feedback colors
    yellow30: colors.yellow.yellow30,
    yellow40: colors.yellow.yellow40,
    yellow50: colors.yellow.yellow50,
    yellow60: colors.yellow.yellow60,
    yellow70: colors.yellow.yellow70,
    yellow80: colors.yellow.yellow80,

    red20: colors.red.red20,
    red30: colors.red.red30,
    red40: colors.red.red40,
    red50: colors.red.red50,
    red55: colors.red.red55,
    red60: colors.red.red60,
    red70: colors.red.red70,

    green20: colors.green.green20,
    green40: colors.green.green40,
    green45: colors.green.green45,
    green50: colors.green.green50,
    green60: colors.green.green60,
    green70: colors.green.green70,

    blue20: colors.blue.blue20,
    blue30: colors.blue.blue30,
    blue40: colors.blue.blue40,
    blue50: colors.blue.blue50,
    blue60: colors.blue.blue60,
    blue70: colors.blue.blue70,

    // Secondary colors
    sky30: colors.sky.sky30,
    sky40: colors.sky.sky40,
    sky50: colors.sky.sky50,
    sky60: colors.sky.sky60,
    sky70: colors.sky.sky70,
    sky75: colors.sky.sky75,

    purple20: colors.purple.purple20,
    purple40: colors.purple.purple40,
    purple50: colors.purple.purple50,
    purple60: colors.purple.purple60,
    purple70: colors.purple.purple70,

    ocean20: colors.ocean.ocean20,
    ocean40: colors.ocean.ocean40,
    ocean50: colors.ocean.ocean50,
    ocean60: colors.ocean.ocean60,
    ocean70: colors.ocean.ocean70,

    forest20: colors.forest.forest20,
    forest40: colors.forest.forest40,
    forest50: colors.forest.forest50,
    forest60: colors.forest.forest60,
    forest70: colors.forest.forest70,

    pink20: colors.pink.pink20,
    pink40: colors.pink.pink40,
    pink50: colors.pink.pink50,
    pink60: colors.pink.pink60,
    pink70: colors.pink.pink70,

    lavander20: colors.lavender.lavender20,
    lavander40: colors.lavender.lavender40,
    lavander50: colors.lavender.lavender50,
    lavander60: colors.lavender.lavender60,
    lavander70: colors.lavender.lavender70,

    electricBlue20: colors.electric.electricBlue20,
    electricBlue40: colors.electric.electricBlue40,
    electricBlue50: colors.electric.electricBlue50,
    electricBlue60: colors.electric.electricBlue60,
    electricBlue70: colors.electric.electricBlue70,

    salmon: colors.salmon.salmon50,

    grass40: colors.grass.grass40,
    grass50: colors.grass.grass50,
    grass60: colors.grass.grass60,
    /*GUI***********************************************************/
  },
  scss: { name: '' },
  shadows: {
    overlay_shadow: '0 2px 4px 0 rgba(106, 106, 106, 0)',
    modal:
      ' 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.2)',
  },
};

export const createTheme = (
  extended: Theme,
  baseTheme: Theme = base
): Theme => ({
  ...baseTheme,
  scss: {
    ...baseTheme.scss,
    ...extended.scss,
  },
  breakpoints: {
    ...baseTheme.breakpoints,
    ...extended.breakpoints,
  },
  colors: {
    ...baseTheme.colors,
    ...extended.colors,
  },
  typography: {
    ...baseTheme.typography,
    ...extended.typography,
  },
  images: {
    ...baseTheme.images,
    ...extended.images,
  },
  spacing: {
    ...baseTheme.spacing,
    ...extended.spacing,
  },
  animation: {
    ...baseTheme.animation,
    ...extended.animation,
  },
});

export default {
  move: createTheme(move),
  // Prefer como tema va a ser eliminado, y reemplazado por classic,
  // se exporto prefer como classic para que las apps no pinchen
  prefer: createTheme(classic),
  classic: createTheme(classic),
  eminent: createTheme(eminent),
};
