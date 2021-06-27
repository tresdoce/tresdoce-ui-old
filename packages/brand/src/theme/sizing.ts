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

export type Breakpoints = {
  [K in keyof typeof EnumBreakPoints]: string
}

type WidthSizes = {
  MQMinWidth: string;
  maxWidth: string;
  MQMaxWidth: string;
}

export type MQSizes = {
  [K in keyof typeof EnumBreakPoints]: WidthSizes;
}

export interface Sizing {
  mqSizes: MQSizes;
  breakpoints: Breakpoints
}

export type SizingInput = { +readonly [K in keyof Sizing]+?: Sizing[K] } & {
  mqSizes?: MQSizes;
  breakpoints?: Breakpoints;
}

const defaultSizing = {
  mqSizes: {
    xs: {
      MQMinWidth: '0', // < 576px
      maxWidth: '100%',
      MQMaxWidth: '575.98px', // X-Small devices (portrait phones, less than 576px)
    },
    sm: {
      MQMinWidth: '576px', // >= 576px
      maxWidth: '540px',
      MQMaxWidth: '767.98px', // Small devices (landscape phones, less than 768px)
    },
    md: {
      MQMinWidth: '768px', // >= 768px
      maxWidth: '720px',
      MQMaxWidth: '991.98px', // Medium devices (tablets, less than 992px)
    },
    lg: {
      MQMinWidth: '992px', // >= 992px
      maxWidth: '960px',
      MQMaxWidth: '1199.98px', // Large devices (desktops, less than 1200px)
    },
    xl: {
      MQMinWidth: '1200px', // >= 1200px
      maxWidth: '1140px',
      MQMaxWidth: '1399.98px', // X-Large devices (large desktops, less than 1400px)
    },
    xxl: {
      MQMinWidth: '1400px', // >= 1400px
      maxWidth: '1320px',
      MQMaxWidth: '1599.98px', // XX-Large devices (larger desktops) No media query since the xxl breakpoint has no upper bound on its maxWidth
    },
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

const createSizing = (sizing?: SizingInput): Sizing => {
  return _.merge(defaultSizing, sizing);
};

export default createSizing;
