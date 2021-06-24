import _ from 'lodash';

export type BreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export enum EnumBreakPoints {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'lg',
  xxl = 'xxl'
}

export type MQSizes = {
  [K in keyof typeof EnumBreakPoints]: string
}

export type Breakpoints = {
  [K in keyof typeof EnumBreakPoints]: string
}

export interface Sizing  {
  minWidth: MQSizes;
  maxWidth: MQSizes;
  breakpoints: Breakpoints
}

export type SizingInput = { +readonly [K in keyof Sizing]+?: Sizing[K]} & {
  minWidth?: MQSizes;
  maxWidth?: MQSizes;
  breakpoints?: Breakpoints;
}

const defaultSizing = {
  minWidth: {
    xs: '0', // < 576px
    sm: '576px', // >= 576px
    md: '768px', // >= 768px
    lg: '992px', // >= 992px
    xl: '1200px', // >= 1200px
    xxl: '1400px', // >= 1400px
  },
  maxWidth: {
    xs: '575.98px', // X-Small devices (portrait phones, less than 576px)
    sm: '767.98px', // Small devices (landscape phones, less than 768px)
    md: '991.98px', // Medium devices (tablets, less than 992px)
    lg: '1199.98px', // Large devices (desktops, less than 1200px)
    xl: '1399.98px', // X-Large devices (large desktops, less than 1400px)
    xxl: '1599.98px', // XX-Large devices (larger desktops) No media query since the xxl breakpoint has no upper bound on its width
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

const createSizing = (sizing?: SizingInput): Sizing =>{
  return _.merge(defaultSizing, sizing)
}

export default createSizing;
