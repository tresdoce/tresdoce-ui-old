export interface Typography {
  fontFamily: string;
  fontSizeH1: string;
  fontSizeH2: string;
  fontSizeH3: string;
  fontSizeH4: string;
  fontSizeH5: string;
  fontSizeH6: string;
  fontSizeP: string;
  fontSizeButton: string;
  fontWeightNormal: number;
  fontWeightLight: number;
  fontWeightBold: number;
}

export type TypographyInput = { +readonly [K in keyof Typography]+?: Typography[K] } & {
  fontSize?: number;
  htmlFontSize?: number;
};

const defaultFontFamily = '\'DINNextLTPro-Condensed\', Helvetica, Arial, sans-serif';

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

const createTypography = (typography: TypographyInput): Typography => {
  const {
    fontFamily = defaultFontFamily,

    /* sizes */
    fontSize = size.px14,
    htmlFontSize = size.px16,

    /* weights */
    fontWeightNormal = 400,
    fontWeightLight = 300,
    fontWeightBold = 700,
  } = typography;

  const coef = fontSize / size.px14;
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

  return {
    fontFamily,
    fontSizeH1: pxToRem(size.px42),
    fontSizeH2: pxToRem(size.px32),
    fontSizeH3: pxToRem(size.px28),
    fontSizeH4: pxToRem(size.px24),
    fontSizeH5: pxToRem(size.px20),
    fontSizeH6: pxToRem(size.px16),
    fontSizeP: pxToRem(size.px16),
    fontSizeButton: pxToRem(size.px14),
    fontWeightNormal,
    fontWeightLight,
    fontWeightBold,
  };
};

export default createTypography;
