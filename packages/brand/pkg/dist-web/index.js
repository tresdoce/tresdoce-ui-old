export { ThemeProvider } from 'styled-components';
import _ from 'lodash';

/*
* Colors:
* https://yeun.github.io/open-color/
*/
const color = {
  white: '#FFFFFF',
  gray: '#767676',
  black: '#1B1C1D',
  brown: '#A5673F',
  pink: '#E03997',
  purple: '#A333C8',
  violet: '#6435C9',
  blue: '#2185D0',
  teal: '#00B5AD',
  green: '#21BA45',
  olive: '#B5CC18',
  yellow: '#FBBD08',
  orange: '#F2711C',
  red: '#DB2828'
};
const primary = {
  100: '#DBE4FF',
  200: '#BAC8FF',
  300: '#91A7FF',
  400: '#748FFC',
  500: '#5C7CFA',
  600: '#4C6EF5',
  700: '#4263EB',
  800: '#3B5BDB',
  900: '#364FC7',
  default: '#5C7CFA',
  transparent: {
    100: 'rgba(92, 124, 250, 0.08)',
    200: 'rgba(92, 124, 250, 0.16)',
    300: 'rgba(92, 124, 250, 0.24)',
    400: 'rgba(92, 124, 250, 0.32)',
    500: 'rgba(92, 124, 250, 0.4)',
    600: 'rgba(92, 124, 250, 0.48)'
  }
};
const gray = {
  100: '#f1f3f5',
  200: '#e9ecef',
  300: '#dee2e6',
  400: '#ced4da',
  500: '#adb5bd',
  600: '#868e96',
  700: '#495057',
  800: '#343a40',
  900: '#212529',
  default: '#adb5bd',
  transparent: {
    100: 'rgba(173, 181, 189, 0.08)',
    200: 'rgba(173, 181, 189, 0.16)',
    300: 'rgba(173, 181, 189, 0.24)',
    400: 'rgba(173, 181, 189, 0.32)',
    500: 'rgba(173, 181, 189, 0.4)',
    600: 'rgba(173, 181, 189, 0.48)'
  }
};
const success = {
  100: '#D3F9D8',
  200: '#B2F2BB',
  300: '#8CE99A',
  400: '#69DB7C',
  500: '#51CF66',
  600: '#40C057',
  700: '#37B24D',
  800: '#2F9E44',
  900: '#2B8A3E',
  default: '#51CF66',
  transparent: {
    100: 'rgba(81, 207, 102, 0.08)',
    200: 'rgba(81, 207, 102, 0.16)',
    300: 'rgba(81, 207, 102, 0.24)',
    400: 'rgba(81, 207, 102, 0.32)',
    500: 'rgba(81, 207, 102, 0.4)',
    600: 'rgba(81, 207, 102, 0.48)'
  }
};
const info = {
  100: '#D0EBFF',
  200: '#A5D8FF',
  300: '#74C0FC',
  400: '#4DABF7',
  500: '#339AF0',
  600: '#228BE6',
  700: '#1C7ED6',
  800: '#1971C2',
  900: '#1864AB',
  default: '#339AF0',
  transparent: {
    100: 'rgba(51, 154, 240, 0.08)',
    200: 'rgba(51, 154, 240, 0.16)',
    300: 'rgba(51, 154, 240, 0.24)',
    400: 'rgba(51, 154, 240, 0.32)',
    500: 'rgba(51, 154, 240, 0.4)',
    600: 'rgba(51, 154, 240, 0.48)'
  }
};
const warning = {
  100: '#FFF3BF',
  200: '#FFEC99',
  300: '#FFE066',
  400: '#FFD43B',
  500: '#FCC419',
  600: '#FAB005',
  700: '#F59F00',
  800: '#F08C00',
  900: '#E67700',
  default: '#FCC419',
  transparent: {
    100: 'rgba(252, 196, 25, 0.08)',
    200: 'rgba(252, 196, 25, 0.16)',
    300: 'rgba(252, 196, 25, 0.24)',
    400: 'rgba(252, 196, 25, 0.32)',
    500: 'rgba(252, 196, 25, 0.4)',
    600: 'rgba(252, 196, 25, 0.48)'
  }
};
const danger = {
  100: '#FFE3E3',
  200: '#FFC9C9',
  300: '#FFA8A8',
  400: '#FF8787',
  500: '#FF6B6B',
  600: '#FA5252',
  700: '#F03E3E',
  800: '#E03131',
  900: '#C92A2A',
  default: '#FF6B6B',
  transparent: {
    100: 'rgba(255, 107, 107, 0.08)',
    200: 'rgba(255, 107, 107, 0.16)',
    300: 'rgba(255, 107, 107, 0.24)',
    400: 'rgba(255, 107, 107, 0.32)',
    500: 'rgba(255, 107, 107, 0.4)',
    600: 'rgba(255, 107, 107, 0.48)'
  }
};
const defaultPallete = {
  color,
  primary,
  gray,
  success,
  info,
  warning,
  danger
};

const createPalette = palette => {
  return _.merge(defaultPallete, palette);
};

//import _ from 'lodash';
const family = {
  fontAwesome: '"FontAwesome"',
  sans: '"Helvetica", Arial, Trebuchet MS, sans-serif',
  hairline: '"Lato-Hairline", Helvetica, Arial, sans-serif',
  hairlineItalic: '"Lato-Hairline-Italic", Helvetica, Arial, sans-serif',
  light: '"Lato-Light", Helvetica, Arial, sans-serif',
  lightItalic: '"Lato-LightItalic", Helvetica, Arial, sans-serif',
  regular: '"Lato", Helvetica, Arial, sans-serif',
  regularItalic: '"Lato-Italic", Helvetica, Arial, sans-serif',
  bold: '"Lato-Bold", Helvetica, Arial, sans-serif',
  boldItalic: '"Lato-BoldItalic", Helvetica, Arial, sans-serif',
  black: '"Lato-Black", Helvetica, Arial, sans-serif',
  blackItalic: '"Lato-BlackItalic", Helvetica, Arial, sans-serif'
};
const sizes = {
  px8: 8,
  px10: 10,
  px12: 12,
  px14: 14,
  px16: 16,
  px18: 18,
  px20: 20,
  px24: 24,
  px28: 28,
  px30: 30,
  px32: 32,
  px36: 36,
  px42: 42,
  px48: 48,
  px54: 54,
  px60: 60,
  px64: 64,
  px68: 68,
  px76: 76,
  px84: 84,
  px92: 92,
  px96: 96
};
const lineHeight = {
  space10: '10px',
  space12: '12px',
  space14: '14px',
  space16: '16px',
  space18: '18px',
  space20: '20px',
  space22: '22px',
  space24: '24px',
  space26: '26px',
  space28: '28px',
  space32: '32px',
  space36: '36px',
  space48: '48px',
  space56: '56px',
  space72: '72px'
};
const letterSpacing = {
  neg03: '-0.03em',
  neg02: '-0.02em',
  neg01: '-0.01em',
  normal: 'normal',
  auto: 'auto',
  space0: '0em',
  space025: '0.025em',
  space01: '0.01em',
  space15: '0.15em'
};
const weight = {
  extraLight: 100,
  light: 300,
  normal: 'normal',
  regular: 400,
  semiBold: 500,
  bold: 'bold',
  ultraBold: 900
};
const align = {
  center: 'center',
  left: 'lef',
  right: 'right'
};

const createTypography = typography => {
  const {
    fontSize = sizes.px14,
    htmlFontSize = sizes.px16
  } = typography;
  const coef = fontSize / sizes.px14;

  const pxToRem = size => `${size / htmlFontSize * coef}rem`;

  const applicationsSizes = {
    H1: pxToRem(sizes.px42),
    H2: pxToRem(sizes.px32),
    H3: pxToRem(sizes.px28),
    H4: pxToRem(sizes.px24),
    H5: pxToRem(sizes.px20),
    H6: pxToRem(sizes.px16),
    p: pxToRem(sizes.px16),
    button: pxToRem(sizes.px14),
    href: pxToRem(sizes.px14)
  };
  return {
    family,
    sizes,
    lineHeight,
    letterSpacing,
    weight,
    align,
    applicationsSizes
  };
};

const loadings = {
  audio: `/images/svg-loaders/audio.svg`,
  ballTriangle: `/images/svg-loaders/ball-triangle.svg`,
  bars: `/images/svg-loaders/bars.svg`,
  circles: `/images/svg-loaders/circles.svg`,
  grid: `/images/svg-loaders/grid.svg`,
  hearts: `/images/svg-loaders/hearts.svg`,
  oval: `/images/svg-loaders/oval.svg`,
  puff: `/images/svg-loaders/puff.svg`,
  rings: `/images/svg-loaders/rings.svg`,
  spinningCircles: `/images/svg-loaders/spinning-circles.svg`,
  tailSpin: `/images/svg-loaders/tail-spin.svg`,
  threeDots: `/images/svg-loaders/three-dots.svg`
};
const themeImages = () => ({
  loading: loadings.oval
});

let EnumBreakPoints;
/*export type MQSizes {
  [K in keyof typeof EnumBreakPoints]: string
}

export type Breakpoints = {
  [K in keyof typeof EnumBreakPoints]: string
}*/

(function (EnumBreakPoints) {
  EnumBreakPoints["xs"] = "xs";
  EnumBreakPoints["sm"] = "sm";
  EnumBreakPoints["md"] = "md";
  EnumBreakPoints["lg"] = "lg";
  EnumBreakPoints["xl"] = "lg";
  EnumBreakPoints["xxl"] = "xxl";
})(EnumBreakPoints || (EnumBreakPoints = {}));

const defaultSizing = {
  MQSizes: {
    xs: '0px',
    // < 576px
    sm: '576px',
    // >= 576px
    md: '768px',
    // >= 768px
    lg: '992px',
    // >= 992px
    xl: '1200px',
    // >= 1200px
    xxl: '1400px' // >= 1400px

  },
  breakpoints: {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'lg',
    xxl: 'xxl'
  }
};

const createSizing = sizing => {
  return _.merge(defaultSizing, sizing);
};

const defaultRadiuses = {
  defaultRadius: '4px',
  radius: {
    2: '2px',
    4: '4px',
    8: '8px',
    12: '12px',
    16: '16px',
    24: '24px',
    32: '32px',
    40: '40px',
    48: '48px',
    64: '64px',
    80: '80px',
    96: '96px',
    160: '160px'
  },
  percentages: {
    0: '0%',
    2: '2%',
    4: '4%',
    8: '8%',
    10: '10%',
    15: '15%',
    20: '20%',
    25: '25%',
    30: '30%',
    35: '35%',
    40: '40%',
    45: '45%',
    50: '50%',
    55: '55%',
    60: '60%',
    65: '65%',
    70: '70%',
    75: '75%',
    80: '80%',
    85: '85%',
    90: '90%',
    95: '95%',
    100: '100%'
  }
};

const createRadiuses = radiuses => {
  return _.merge(defaultRadiuses, radiuses);
};

const spacing = {
  default: {
    space2: '2px',
    space4: '4px',
    space8: '8px',
    space12: '12px',
    space16: '16px',
    space24: '24px',
    space32: '32px',
    space40: '40px',
    space48: '48px',
    space64: '64px',
    space80: '80px',
    space96: '96px',
    space160: '160px'
  },
  top: {
    space2: '2px 0 0 0',
    space4: '4px 0 0 0',
    space8: '8px 0 0 0',
    space12: '12px 0 0 0',
    space16: '16px 0 0 0',
    space24: '24px 0 0 0',
    space32: '32px 0 0 0',
    space40: '40px 0 0 0',
    space48: '48px 0 0 0',
    space64: '64px 0 0 0',
    space80: '80px 0 0 0',
    space96: '96px 0 0 0',
    space160: '160px 0 0 0'
  },
  right: {
    space2: '0 2px 0 0',
    space4: '0 4px 0 0',
    space8: '0 8px 0 0',
    space12: '0 12px 0 0',
    space16: '0 16px 0 0',
    space24: '0 24px 0 0',
    space32: '0 32px 0 0',
    space40: '0 40px 0 0',
    space48: '0 48px 0 0',
    space64: '0 64px 0 0',
    space80: '0 80px 0 0',
    space96: '0 96px 0 0',
    space160: '0 160px 0 0'
  },
  bottom: {
    space2: '0 0 2px 0',
    space4: '0 0 4px 0',
    space8: '0 0 8px 0',
    space12: '0 0 12px 0',
    space16: '0 0 16px 0',
    space24: '0 0 24px 0',
    space32: '0 0 32px 0',
    space40: '0 0 40px 0',
    space48: '0 0 48px 0',
    space64: '0 0 64px 0',
    space80: '0 0 80px 0',
    space96: '0 0 96px 0',
    space160: '0 0 160px 0'
  },
  left: {
    space2: '0 0 0 2px',
    space4: '0 0 0 4px',
    space8: '0 0 0 8px',
    space12: '0 0 0 12px',
    space16: '0 0 0 16px',
    space24: '0 0 0 24px',
    space32: '0 0 0 32px',
    space40: '0 0 0 40px',
    space48: '0 0 0 48px',
    space64: '0 0 0 64px',
    space80: '0 0 0 80px',
    space96: '0 0 0 96px',
    space160: '0 0 0 160px'
  },
  horizontal: {
    space2: '0 2px',
    space4: '0 4px',
    space8: '0 8px',
    space12: '0 12px',
    space16: '0 16px',
    space24: '0 24px',
    space32: '0 32px',
    space40: '0 40px',
    space48: '0 48px',
    space64: '0 64px',
    space80: '0 80px',
    space96: '0 96px',
    space160: '0 160px'
  },
  vertical: {
    space2: '2px 0',
    space4: '4px 0',
    space8: '8px 0',
    space12: '12px 0',
    space16: '16px 0',
    space24: '24px 0',
    space32: '32px 0',
    space40: '40px 0',
    space48: '48px 0',
    space64: '64px 0',
    space80: '80px 0',
    space96: '96px 0',
    space160: '160px 0'
  }
};

const zIndex = {
  zIndex1: 100,
  zIndex2: 200,
  zIndex3: 300,
  zIndex4: 400,
  zIndex5: 500,
  zIndex6: 600,
  zIndex7: 700,
  zIndex8: 800,
  zIndex9: 900,
  zIndex10: 1000,
  zIndex11: 1010,
  zIndex12: 1020,
  zIndex13: 1030,
  zIndex14: 1040,
  zIndex15: 1050,
  zIndex16: 1060,
  zIndex17: 1070,
  zIndex18: 1080,
  zIndex19: 1090,
  applications: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    offCanvas: 1040,
    modalBackdrop: 1050,
    modal: 1060,
    popover: 1070,
    tooltip: 1080
  }
};

const createTheme = options => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {},
    radiuses: radiusesInput = {},
    sizing: sizingInput = {}
  } = options || {};
  const palette = createPalette(paletteInput);
  const typography = createTypography(typographyInput);
  const images = themeImages();
  const radiuses = createRadiuses(radiusesInput);
  const sizing = createSizing(sizingInput);
  return {
    palette,
    typography,
    images,
    sizing,
    spacing,
    radiuses,
    zIndex
  };
};

export { createTheme };
//# sourceMappingURL=index.js.map
