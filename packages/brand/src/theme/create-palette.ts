import _ from 'lodash';

export interface Palette {
  [name:string]:string;
}

export type PaletteInput = {
  [name: string]: string;
}

const defaultPallete = {
  white: '#fff',
  grey: '#767676',
  black: '#1B1C1D',
  brown: '#A5673F',
  pink: '#E03997',
  purple: '#A333C8',
  violet: '#6435C9',
  blue: '#2185D0',
  teal: '#00B5AD',
  green: '#21BA45',
  olive: '#B5CC18',
  yellow: '#FBBD08',
  orange: '#F2711C',
  red: '#DB2828',
  primary: '#009688',
  secondary: '#07C9B7',
};

const createPalette = (palette?: PaletteInput): Palette => {
  return _.merge(defaultPallete, palette);
};

export default createPalette;
