/*
* Colors:
* https://yeun.github.io/open-color/
*/


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
  gray?: ColorPalette;
  success?: ColorPalette;
  info?: ColorPalette;
  warning?: ColorPalette;
  danger?: ColorPalette;
  [key: string]: ColorPalette;
}

const color = {
  white: '#FFFFFF',
  gray: '#767676',
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
  100: '#DBE4FF',
  200: '#BAC8FF',
  300: '#91A7FF',
  400: '#748FFC',
  500: '#5C7CFA',
  600: '#4C6EF5',
  700: '#4263EB',
  800: '#3B5BDB',
  900: '#364FC7',
  transparent: {
    100: 'rgba(92, 124, 250, 0.08)',
    200: 'rgba(92, 124, 250, 0.16)',
    300: 'rgba(92, 124, 250, 0.24)',
    400: 'rgba(92, 124, 250, 0.32)',
    500: 'rgba(92, 124, 250, 0.4)',
    600: 'rgba(92, 124, 250, 0.48)',
  },
};

const gray = {
  100: '#f1f3f5',
  200: '#e9ecef',
  300: '#dee2e6',
  400: '#ced4da',
  500: '#adb5bd',
  600: '#868e96',
  700: '#495057',
  800: '#343a40',
  900: '#212529',
  transparent: {
    100: 'rgba(173, 181, 189, 0.08)',
    200: 'rgba(173, 181, 189, 0.16)',
    300: 'rgba(173, 181, 189, 0.24)',
    400: 'rgba(173, 181, 189, 0.32)',
    500: 'rgba(173, 181, 189, 0.4)',
    600: 'rgba(173, 181, 189, 0.48)',
  },
};

const success = {
  100: '#D3F9D8',
  200: '#B2F2BB',
  300: '#8CE99A',
  400: '#69DB7C',
  500: '#51CF66',
  600: '#40C057',
  700: '#37B24D',
  800: '#2F9E44',
  900: '#2B8A3E',
  transparent: {
    100: 'rgba(81, 207, 102, 0.08)',
    200: 'rgba(81, 207, 102, 0.16)',
    300: 'rgba(81, 207, 102, 0.24)',
    400: 'rgba(81, 207, 102, 0.32)',
    500: 'rgba(81, 207, 102, 0.4)',
    600: 'rgba(81, 207, 102, 0.48)',
  },
};

const info = {
  100: '#D0EBFF',
  200: '#A5D8FF',
  300: '#74C0FC',
  400: '#4DABF7',
  500: '#339AF0',
  600: '#228BE6',
  700: '#1C7ED6',
  800: '#1971C2',
  900: '#1864AB',
  transparent: {
    100: 'rgba(51, 154, 240, 0.08)',
    200: 'rgba(51, 154, 240, 0.16)',
    300: 'rgba(51, 154, 240, 0.24)',
    400: 'rgba(51, 154, 240, 0.32)',
    500: 'rgba(51, 154, 240, 0.4)',
    600: 'rgba(51, 154, 240, 0.48)',
  },
};

const warning = {
  100: '#FFF3BF',
  200: '#FFEC99',
  300: '#FFE066',
  400: '#FFD43B',
  500: '#FCC419',
  600: '#FAB005',
  700: '#F59F00',
  800: '#F08C00',
  900: '#E67700',
  transparent: {
    100: 'rgba(252, 196, 25, 0.08)',
    200: 'rgba(252, 196, 25, 0.16)',
    300: 'rgba(252, 196, 25, 0.24)',
    400: 'rgba(252, 196, 25, 0.32)',
    500: 'rgba(252, 196, 25, 0.4)',
    600: 'rgba(252, 196, 25, 0.48)',
  },
};

const danger = {
  100: '#FFE3E3',
  200: '#FFC9C9',
  300: '#FFA8A8',
  400: '#FF8787',
  500: '#FF6B6B',
  600: '#FA5252',
  700: '#F03E3E',
  800: '#E03131',
  900: '#C92A2A',
  transparent: {
    100: 'rgba(255, 107, 107, 0.08)',
    200: 'rgba(255, 107, 107, 0.16)',
    300: 'rgba(255, 107, 107, 0.24)',
    400: 'rgba(255, 107, 107, 0.32)',
    500: 'rgba(255, 107, 107, 0.4)',
    600: 'rgba(255, 107, 107, 0.48)',
  },
};

export const defaultPallete = {
  color,
  primary,
  gray,
  success,
  info,
  warning,
  danger,
};

const createPalette = (palette?: PaletteInput): Palette => {
  return _.merge(defaultPallete, palette);
};

export default createPalette;
