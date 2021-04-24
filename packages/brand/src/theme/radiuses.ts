import _ from 'lodash';

type KeyRadius = string | number;

type Radius = {
  [K in keyof KeyRadius]: string;
}

export interface Radiuses {
  radius: Radius;
  percentages: Radius;
  [key: string]: Radius;
}

export type RadiusesInput = { +readonly [K in keyof Radiuses]+?: Radiuses[K] } & {
  radius?: Radius,
  percentages?: Radius,
  [key: string]: Radius,
}

const defaultRadiuses = {
  defaultRadius: '4px',
  radius:{
    2: '2px',
    4: '4px',
    8: '8px',
    12: '12px',
    16: '16px',
    24: '24px',
    32: '32px',
    40: '40px',
    48: '48px',
    64: '64px',
    80: '80px',
    96: '96px',
    160: '160px',
  },
  percentages: {
    0: '0%',
    2: '2%',
    4: '4%',
    8: '8%',
    10: '10%',
    15: '15%',
    20: '20%',
    25: '25%',
    30: '30%',
    35: '35%',
    40: '40%',
    45: '45%',
    50: '50%',
    55: '55%',
    60: '60%',
    65: '65%',
    70: '70%',
    75: '75%',
    80: '80%',
    85: '85%',
    90: '90%',
    95: '95%',
    100: '100%',
  },
};

const createRadiuses = (radiuses?: RadiusesInput): Radiuses => {
  return _.merge(defaultRadiuses, radiuses);
}

export default createRadiuses;
