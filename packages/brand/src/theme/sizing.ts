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

/*export type MQSizes {
  [K in keyof typeof EnumBreakPoints]: string
}

export type Breakpoints = {
  [K in keyof typeof EnumBreakPoints]: string
}*/

type MQSizes = {
  [key: string]: string;
}

type Breakpoints = {
  [key: string]: string;
}

export interface Sizing  {
  MQSizes: MQSizes;
  breakpoints: Breakpoints
}

export type SizingInput = { +readonly [K in keyof Sizing]+?: Sizing[K]} & {
  MQSizes?: MQSizes;
  breakpoints?: Breakpoints;
}

const defaultSizing = {
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

const createSizing = (sizing: SizingInput): Sizing =>{
  return _.merge(defaultSizing, sizing)
}

export default createSizing;
