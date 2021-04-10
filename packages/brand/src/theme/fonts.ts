// Variables
const size = {
  px10: '10px',
  px12: '12px',
  px14: '14px',
  px16: '16px',
  px18: '18px',
  px20: '20px',
  px24: '24px',
  px30: '30px',
  px32: '32px',
  px48: '48px',
  px64: '64px',
  px96: '96px',
};

const weight = {
  normal: 'normal',
  bold: 'bold',
  extralight: 100,
  light: 300,
  regular: 400,
  semibold: 500,
};

const fontFamily = {
  interRegular: 'interregular',
  interBold: 'interbold',
  interUI: 'Inter',
};

const align = {
  center: 'center',
  left: 'lef',
  right: 'right',
};

const lineHeight = {
  space16: '16px',
  space18: '18px',
  space20: '20px',
  space22: '22px',
  space24: '24px',
  space26: '26px',
  space28: '28px',
  space36: '36px',
  space48: '48px',
  space56: '56px',
  space72: '72px',
};

const stretch = {
  normal: 'normal',
};

const style = {
  normal: 'normal',
};

const letterSpacing = {
  spaceNormal: 'normal',
  space0: '0px',
  space03: '0.3px',
  space4: '4px',
};

// Properties
export const properties = {
  size,
  weight,
  fontFamily,
  align,
  lineHeight,
  letterSpacing,
  stretch,
  style,
};

// Variants
export const variants = {
  s1: {
    lineHeight: properties.lineHeight.space36,
    fontSize: properties.size.px30,
    mobile: {
      lineHeight: properties.lineHeight.space28,
      fontSize: properties.size.px24,
    },
  },
  s2: {
    lineHeight: properties.lineHeight.space26,
    fontSize: properties.size.px24,
    mobile: {
      lineHeight: properties.lineHeight.space24,
      fontSize: properties.size.px20,
    },
  },
  s3: {
    lineHeight: properties.lineHeight.space24,
    fontSize: properties.size.px20,
    mobile: {
      lineHeight: properties.lineHeight.space22,
      fontSize: properties.size.px18,
    },
  },
  s4: {
    lineHeight: properties.lineHeight.space22,
    fontSize: properties.size.px18,
    mobile: {
      lineHeight: properties.lineHeight.space20,
      fontSize: properties.size.px16,
    },
  },
  s5: {
    lineHeight: properties.lineHeight.space20,
    fontSize: properties.size.px16,
    mobile: {
      lineHeight: properties.lineHeight.space18,
      fontSize: properties.size.px14,
    },
  },
  s6: {
    lineHeight: properties.lineHeight.space20,
    fontSize: properties.size.px16,
    fontFamily: properties.fontFamily.interBold,
    mobile: {
      lineHeight: properties.lineHeight.space18,
      fontSize: properties.size.px14,
      fontFamily: properties.fontFamily.interBold,
    },
  },
  s7: {
    lineHeight: properties.lineHeight.space18,
    fontSize: properties.size.px14,
    mobile: {
      lineHeight: properties.lineHeight.space16,
      fontSize: properties.size.px12,
    },
  },
  'title-big': {
    lineHeight: properties.lineHeight.space36,
    fontSize: properties.size.px24,
    mobile: {
      lineHeight: properties.lineHeight.space16,
      fontSize: properties.size.px20,
    },
  },
  'title-jumbo': {
    lineHeight: properties.lineHeight.space56,
    fontSize: properties.size.px48,
    mobile: {
      lineHeight: properties.lineHeight.space48,
      fontSize: properties.size.px32,
    },
  },
  'title-medium': {
    lineHeight: properties.lineHeight.space26,
    fontSize: properties.size.px20,
    mobile: {
      lineHeight: properties.lineHeight.space26,
      fontSize: properties.size.px16,
    },
  },
  'title-micro': {
    lineHeight: properties.lineHeight.space24,
    fontSize: properties.size.px14,
    mobile: {
      lineHeight: properties.lineHeight.space20,
      fontSize: properties.size.px12,
    },
  },
  'title-section': {
    lineHeight: properties.lineHeight.space48,
    fontSize: properties.size.px32,
    mobile: {
      lineHeight: properties.lineHeight.space36,
      fontSize: properties.size.px24,
    },
  },
  'title-small': {
    lineHeight: properties.lineHeight.space26,
    fontSize: properties.size.px16,
    mobile: {
      lineHeight: properties.lineHeight.space24,
      fontSize: properties.size.px14,
    },
  },
  'title-nano': {
    lineHeight: properties.lineHeight.space16,
    fontSize: properties.size.px10,
  },

  'text-body': {
    lineHeight: properties.lineHeight.space24,
    fontSize: properties.size.px14,
    mobile: {
      lineHeight: properties.lineHeight.space20,
      fontSize: properties.size.px12,
    },
  },
  'text-input-medium': {
    lineHeight: properties.lineHeight.space26,
    fontSize: properties.size.px16,
    mobile: {
      lineHeight: properties.lineHeight.space24,
      fontSize: properties.size.px14,
    },
  },
  'text-input-big': {
    lineHeight: properties.lineHeight.space56,
    fontSize: properties.size.px48,
    mobile: {
      lineHeight: properties.lineHeight.space48,
      fontSize: properties.size.px32,
    },
  },
  'text-input-hint': {
    lineHeight: properties.lineHeight.space20,
    fontSize: properties.size.px12,
    mobile: {
      lineHeight: properties.lineHeight.space20,
      fontSize: properties.size.px12,
    },
  },

  'number-small': {
    lineHeight: properties.lineHeight.space26,
    fontSize: properties.size.px16,
    mobile: {
      lineHeight: properties.lineHeight.space24,
      fontSize: properties.size.px14,
    },
  },
  'number-medium': {
    lineHeight: properties.lineHeight.space24,
    fontSize: properties.size.px20,
    mobile: {
      lineHeight: properties.lineHeight.space26,
      fontSize: properties.size.px16,
    },
  },
  'number-big': {
    lineHeight: properties.lineHeight.space56,
    fontSize: properties.size.px48,
    mobile: {
      lineHeight: properties.lineHeight.space48,
      fontSize: properties.size.px32,
    },
  },
  'number-jumbo': {
    lineHeight: properties.lineHeight.space72,
    fontSize: properties.size.px64,
    mobile: {
      lineHeight: properties.lineHeight.space56,
      fontSize: properties.size.px48,
    },
  },
  'number-secret': {
    lineHeight: properties.lineHeight.space56,
    fontSize: properties.size.px96,
    mobile: {
      lineHeight: properties.lineHeight.space72,
      fontSize: properties.size.px64,
    },
  },
  'text-label': {
    lineHeight: properties.lineHeight.space20,
    fontSize: properties.size.px12,
    mobile: {
      lineHeight: properties.lineHeight.space20,
      fontSize: properties.size.px12,
    },
  },
};
