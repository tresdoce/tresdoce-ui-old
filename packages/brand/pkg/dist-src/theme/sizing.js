import _ from 'lodash';
export let EnumBreakPoints;
/*export type MQSizes {
  [K in keyof typeof EnumBreakPoints]: string
}

export type Breakpoints = {
  [K in keyof typeof EnumBreakPoints]: string
}*/

(function (EnumBreakPoints) {
  EnumBreakPoints["xs"] = "xs";
  EnumBreakPoints["sm"] = "sm";
  EnumBreakPoints["md"] = "md";
  EnumBreakPoints["lg"] = "lg";
  EnumBreakPoints["xl"] = "lg";
  EnumBreakPoints["xxl"] = "xxl";
})(EnumBreakPoints || (EnumBreakPoints = {}));

const defaultSizing = {
  MQSizes: {
    xs: '0px',
    // < 576px
    sm: '576px',
    // >= 576px
    md: '768px',
    // >= 768px
    lg: '992px',
    // >= 992px
    xl: '1200px',
    // >= 1200px
    xxl: '1400px' // >= 1400px

  },
  breakpoints: {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'lg',
    xxl: 'xxl'
  }
};

const createSizing = sizing => {
  return _.merge(defaultSizing, sizing);
};

export default createSizing;