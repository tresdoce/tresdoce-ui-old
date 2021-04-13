declare interface FontFamily {
  [name: string]: string;
}

declare interface FontSizes {
  [name: string]: number;
}

declare interface LineHeight {
  [name: string]: string;
}

declare interface LetterSpacing {
  [name: string]: string;
}

declare interface FontWeight {
  [name: string]: string | number;
}

declare interface FontAlign {
  [name: string]: string;
}

declare interface ApplicationsSizes {
  [name: string]: string;
}

export interface Typography {
  family: FontFamily,
  sizes: FontSizes;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
  weight: FontWeight;
  align: FontAlign;
  applicationsSizes: ApplicationsSizes;
}

export type TypographyInput = { +readonly [K in keyof Typography]+?: Typography[K] } & {
  fontSize?: number;
  htmlFontSize?: number;
};

const family = {
  ultraLight: '\'DINNextLTPro-UltraLightCond\', Helvetica, Arial, sans-serif',
  light: '\'DINNextLTPro-LightCondensed\', Helvetica, Arial, sans-serif',
  regular: '\'DINNextLTPro-Condensed\', Helvetica, Arial, sans-serif',
  medium: '\'DINNextLTPro-MediumCond\', Helvetica, Arial, sans-serif',
  bold: '\'DINNextLTPro-BoldCondensed\', Helvetica, Arial, sans-serif',
  sans: '\'Helvetica\', Arial, Trebuchet MS, sans-serif',
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
  space72: '72px',
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

const createTypography = (typography: TypographyInput): Typography => {
  const {
    fontSize = sizes.px14,
    htmlFontSize = sizes.px16,
  } = typography;

  const coef = fontSize / sizes.px14;
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

  return {
    family,
    sizes,
    lineHeight,
    letterSpacing,
    weight,
    align,
    applicationsSizes: {
      H1: pxToRem(sizes.px42),
      H2: pxToRem(sizes.px32),
      H3: pxToRem(sizes.px28),
      H4: pxToRem(sizes.px24),
      H5: pxToRem(sizes.px20),
      H6: pxToRem(sizes.px16),
      p: pxToRem(sizes.px16),
      button: pxToRem(sizes.px14),
      href: pxToRem(sizes.px14),
    },
  };
};

export default createTypography;
