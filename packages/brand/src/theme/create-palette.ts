import _ from 'lodash';

type KeyPallet = string | number;

type ColorPalette = {
  [K in keyof KeyPallet]: string;
}

export interface Palette {
  color: ColorPalette;
  primary: ColorPalette;
  success: ColorPalette;
  info: ColorPalette;
  warning: ColorPalette;
  danger: ColorPalette;
  [key: string]: ColorPalette;
}

export type PaletteInput = { +readonly  [K in keyof Palette]+?: Palette[K]} & {
  color?: ColorPalette;
  primary?: ColorPalette;
  success?: ColorPalette;
  info?: ColorPalette;
  warning?: ColorPalette;
  danger?: ColorPalette;
  [key: string]: ColorPalette;
}

const color = {
  white: '#FFFFFF',
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
};

const primary = {
  100: '#D6E4FF',
  200: '#ADC8FF',
  300: '#84A9FF',
  400: '#6690FF',
  500: '#3366FF',
  600: '#254EDB',
  700: '#1939B7',
  800: '#102693',
  900: '#091A7A',
  transparent: {
    100: 'rgba(51, 102, 255, 0.08)',
    200: 'rgba(51, 102, 255, 0.16)',
    300: 'rgba(51, 102, 255, 0.24)',
    400: 'rgba(51, 102, 255, 0.32)',
    500: 'rgba(51, 102, 255, 0.4)',
    600: 'rgba(51, 102, 255, 0.48)',
  },
};

const success = {
  100: '#ECFCD6',
  200: '#D6F9AF',
  300: '#B4ED83',
  400: '#92DC61',
  500: '#64C633',
  600: '#49AA25',
  700: '#318E19',
  800: '#1E7210',
  900: '#105F09',
  transparent: {
    100: 'rgba(100, 198, 51, 0.08)',
    200: 'rgba(100, 198, 51, 0.16)',
    300: 'rgba(100, 198, 51, 0.24)',
    400: 'rgba(100, 198, 51, 0.32)',
    500: 'rgba(100, 198, 51, 0.4)',
    600: 'rgba(100, 198, 51, 0.48)',
  },
};

const info = {
  100: '#D8FAFF',
  200: '#B1F0FF',
  300: '#8AE2FF',
  400: '#6DD1FF',
  500: '#3DB7FF',
  600: '#2C8FDB',
  700: '#1E6CB7',
  800: '#134C93',
  900: '#0B367A',
  transparent: {
    100: 'rgba(61, 183, 255, 0.08)',
    200: 'rgba(61, 183, 255, 0.16)',
    300: 'rgba(61, 183, 255, 0.24)',
    400: 'rgba(61, 183, 255, 0.32)',
    500: 'rgba(61, 183, 255, 0.4)',
    600: 'rgba(61, 183, 255, 0.48)',
  },
};

const warning = {
  100: '#FFF8CE',
  200: '#FFF09C',
  300: '#FFE56C',
  400: '#FFDA47',
  500: '#FFC90A',
  600: '#DBA707',
  700: '#B78805',
  800: '#936A03',
  900: '#7A5401',
  transparent: {
    100: 'rgba(255, 201, 10, 0.08)',
    200: 'rgba(255, 201, 10, 0.16)',
    300: 'rgba(255, 201, 10, 0.24)',
    400: 'rgba(255, 201, 10, 0.32)',
    500: 'rgba(255, 201, 10, 0.4)',
    600: 'rgba(255, 201, 10, 0.48)',
  },
};

const danger = {
  100: '#FFE5D5',
  200: '#FFC5AC',
  300: '#FF9D82',
  400: '#FF7863',
  500: '#FF3A30',
  600: '#DB2329',
  700: '#B7182B',
  800: '#930F2A',
  900: '#7A0929',
  transparent: {
    100: 'rgba(255, 58, 48, 0.08)',
    200: 'rgba(255, 58, 48, 0.16)',
    300: 'rgba(255, 58, 48, 0.24)',
    400: 'rgba(255, 58, 48, 0.32)',
    500: 'rgba(255, 58, 48, 0.4)',
    600: 'rgba(255, 58, 48, 0.48)',
  },
};

export const defaultPallete = {
  color,
  primary,
  success,
  info,
  warning,
  danger,
};

const createPalette = (palette?: PaletteInput): Palette => {
  return _.merge(defaultPallete, palette);
};

export default createPalette;
