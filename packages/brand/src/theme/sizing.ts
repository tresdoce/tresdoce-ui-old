export enum EnumBreakPoints {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'lg',
  xxl = 'xxl'
}

export type MQSizes = {
  [key in keyof typeof EnumBreakPoints]: string
}

export type Breakpoints = {
  [key in keyof typeof EnumBreakPoints]: string
}

export type Sizing = {
  MQSizes: MQSizes;
  breakpoints: Breakpoints
}

const sizing = {
  MQSizes: {
    xs: '0px', // < 576px
    sm: '576px', // >= 576px
    md: '768px', // >= 768px
    lg: '992px', // >= 992px
    xl: '1200px', // >= 1200px
    xxl: '1400px', // >= 1400px
  },
  breakpoints: {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'lg',
    xxl: 'xxl',
  },
};

export default sizing;
