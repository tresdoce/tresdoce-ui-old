import { pxToRem } from '../utils';
import _ from 'lodash';

type KeyLineHeight = string | number;

type FontFamily = {
  [name: string]: string;
}

type FontSizes = {
  [name: string]: number;
}

type LineHeight = {
  [K in keyof KeyLineHeight]: string | number;
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

type VariantProperties = {
  weight: FontWeight;
  size: FontSizes;
  lineHeight: LineHeight;
}

type Variants = {
  [name: string]: VariantProperties;
}

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
  normal: 'normal',
  initial: 'initial',
  120: 1.20,
  125: 1.25,
  130: 1.3,
  135: 1.35,
  140: 1.4,
  145: 1.45,
  150: 1.5,
  155: 1.55,
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

const variants = {
  H1: {
    weight: weight.bold,
    size: pxToRem(sizes.px42),
    lineHeight: lineHeight['120'],
  },
  H2: {
    weight: weight.bold,
    size: pxToRem(sizes.px32),
    lineHeight: lineHeight['130'],
  },
  H3: {
    weight: weight.bold,
    size: pxToRem(sizes.px28),
    lineHeight: lineHeight['130'],
  },
  H4: {
    weight: weight.bold,
    size: pxToRem(sizes.px24),
    lineHeight: lineHeight['130'],
  },
  H5: {
    weight: weight.bold,
    size: pxToRem(sizes.px20),
    lineHeight: lineHeight['135'],
  },
  H6: {
    weight: weight.bold,
    size: pxToRem(sizes.px16),
    lineHeight: lineHeight['140'],
  },
  p: {
    weight: weight.regular,
    size: pxToRem(sizes.px16),
    lineHeight: lineHeight['140'],
  },
};

export const defaultProperties = {
  family,
  sizes,
  lineHeight,
  letterSpacing,
  weight,
  align,
  transform,
  variants,
};

export interface Typography {
  family: FontFamily,
  sizes: FontSizes;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
  weight: FontWeight;
  align: FontAlign;
  transform: TextTransform;
  variants: Variants;
}

export type TypographyInput = { +readonly [K in keyof Typography]+?: Typography[K] } & {
  family?: FontFamily,
  sizes?: FontSizes;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  weight?: FontWeight;
  align?: FontAlign;
  transform?: TextTransform;
  variants?: Variants;
};

const createTypography = (typography?: TypographyInput): Typography => {
  return _.merge(defaultProperties, typography);
};

export default createTypography;
