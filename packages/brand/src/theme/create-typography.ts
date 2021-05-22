import { pxToRem } from '../utils';
import _ from 'lodash';

type FontFamily = {
  [name: string]: string;
}

type FontSizes = {
  [name: string]: number;
}

type LineHeight = {
  [name: string]: string;
}

type LetterSpacing = {
  [name: string]: string;
}

type FontWeight = {
  [name: string]: string | number;
}

type FontAlign = {
  [name: string]: string;
}

type TextTransform = {
  [name: string]: string;
}

type ApplicationsSizes = {
  [name: string]: string;
}

export interface Typography {
  family: FontFamily,
  sizes: FontSizes;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
  weight: FontWeight;
  align: FontAlign;
  transform: TextTransform;
  applicationsSizes: ApplicationsSizes;
}

export interface Variants {
  [name: string]: Typography;
}

export type TypographyInput = { +readonly [K in keyof Typography]+?: Typography[K] } & {
  fontSize?: number;
  htmlFontSize?: number;
};

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
  blackItalic: '"Lato-BlackItalic", Helvetica, Arial, sans-serif',
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
  px96: 96,
};

const lineHeight = {
  height10: '10px',
  height12: '12px',
  height14: '14px',
  height16: '16px',
  height18: '18px',
  height20: '20px',
  height22: '22px',
  height24: '24px',
  height26: '26px',
  height28: '28px',
  height32: '32px',
  height36: '36px',
  height48: '48px',
  height56: '56px',
  height72: '72px',
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
  space15: '0.15em',
};

const weight = {
  extraLight: 100,
  light: 300,
  normal: 'normal',
  regular: 400,
  semiBold: 500,
  bold: 'bold',
  ultraBold: 900,
};

const align = {
  center: 'center',
  left: 'lef',
  right: 'right',
};

const transform = {
  initial: 'initial',
  capitalize: 'capitalize',
  lowercase: 'lowercase',
  uppercase: 'uppercase',
  none: 'none',
};

const createTypography = (typography: TypographyInput): Typography => {
  const {
    fontSize = sizes.px14,
    htmlFontSize = sizes.px16,
  } = typography;


  const applicationsSizes = {
    H1: pxToRem(sizes.px42, fontSize, htmlFontSize),
    H2: pxToRem(sizes.px32, fontSize, htmlFontSize),
    H3: pxToRem(sizes.px28, fontSize, htmlFontSize),
    H4: pxToRem(sizes.px24, fontSize, htmlFontSize),
    H5: pxToRem(sizes.px20, fontSize, htmlFontSize),
    H6: pxToRem(sizes.px16, fontSize, htmlFontSize),
    p: pxToRem(sizes.px16, fontSize, htmlFontSize),
    button: pxToRem(sizes.px14, fontSize, htmlFontSize),
    href: pxToRem(sizes.px14, fontSize, htmlFontSize),
  };

  const properties = {
    family,
    sizes,
    lineHeight,
    letterSpacing,
    weight,
    align,
    transform,
    applicationsSizes
  };

  return _.merge({},properties);
};

export default createTypography;
