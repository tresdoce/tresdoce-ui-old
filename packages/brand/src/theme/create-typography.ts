export interface FontFamily{
  [name: string]: string;
}

export interface FontAlign{
  [name: string]: string;
}

export interface FontWeight{
  [name: string]: string | number;
}

export interface Typography {
  fontSizeH1: string;
  fontSizeH2: string;
  fontSizeH3: string;
  fontSizeH4: string;
  fontSizeH5: string;
  fontSizeH6: string;
  fontSizeP: string;
  fontSizeButton: string;
  align: FontAlign;
  weight: FontWeight;
  family: FontFamily,
}

export type TypographyInput = { +readonly [K in keyof Typography]+?: Typography[K] } & {
  fontSize?: number;
  htmlFontSize?: number;
};

const defaultFontFamily = '\'DINNextLTPro-Condensed\', Helvetica, Arial, sans-serif';

const family = {
  ultraLight: '\'DINNextLTPro-UltraLightCond\', Helvetica, Arial, sans-serif',
  light: '\'DINNextLTPro-LightCondensed\', Helvetica, Arial, sans-serif',
  regular: defaultFontFamily,
  medium: '\'DINNextLTPro-MediumCond\', Helvetica, Arial, sans-serif',
  bold: '\'DINNextLTPro-BoldCondensed\', Helvetica, Arial, sans-serif',
  sans: '\'Helvetica\', Arial, Trebuchet MS, sans-serif'
};

const size = {
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
}

const weight = {
  extraLight: 100,
  light: 300,
  normal: 'normal',
  regular: 400,
  semiBold: 500,
  bold: 'bold',
  ultraBold:900
};

const align = {
  center: 'center',
  left: 'lef',
  right: 'right',
};

const createTypography = (typography: TypographyInput): Typography => {
  const {
    /* sizes */
    fontSize = size.px14,
    htmlFontSize = size.px16,
  } = typography;

  const coef = fontSize / size.px14;
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

  return {
    family,
    fontSizeH1: pxToRem(size.px42),
    fontSizeH2: pxToRem(size.px32),
    fontSizeH3: pxToRem(size.px28),
    fontSizeH4: pxToRem(size.px24),
    fontSizeH5: pxToRem(size.px20),
    fontSizeH6: pxToRem(size.px16),
    fontSizeP: pxToRem(size.px16),
    fontSizeButton: pxToRem(size.px14),
    align,
    weight
  };
};

export default createTypography;
