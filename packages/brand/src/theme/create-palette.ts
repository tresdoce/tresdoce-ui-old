import _ from 'lodash';

export interface Palette {
  white: string;
  grey: string;
  black: string;
  brown: string;
  pink: string;
  purple: string;
  violet: string;
  blue: string;
  teal: string;
  green: string;
  olive: string;
  yellow: string;
  orange: string;
  red: string;
  primary: string;
  secondary: string;
};

export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K];
}

const createPalette = (palette: PaletteInput): Palette => {
  const {
    white = '#fff',
    grey = '#767676',
    black = '#1B1C1D',
    brown = '#A5673F',
    pink = '#E03997',
    purple = '#A333C8',
    violet = '#6435C9',
    blue = '#2185D0',
    teal = '#00B5AD',
    green = '#21BA45',
    olive = '#B5CC18',
    yellow = '#FBBD08',
    orange = '#F2711C',
    red = '#DB2828',
    primary = '#009688',
    secondary = '#07C9B7',
  } = palette;

  return {
    white,
    grey,
    black,
    brown,
    pink,
    purple,
    violet,
    blue,
    teal,
    green,
    olive,
    yellow,
    orange,
    red,
    primary,
    secondary
  };
};

export default createPalette;
