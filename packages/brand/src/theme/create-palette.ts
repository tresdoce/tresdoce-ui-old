/*
* Colors:
* https://yeun.github.io/open-color/
* https://themera.vercel.app/
*/

import _ from 'lodash';

type KeyPallet = string | number;

type ColorPalette = {
  [K in keyof KeyPallet]: string;
}

export interface Palette {
  color: ColorPalette;
  primary: ColorPalette;
  dark: ColorPalette;
  gray: ColorPalette;
  red: ColorPalette;
  pink: ColorPalette;
  grape: ColorPalette;
  violet: ColorPalette;
  indigo: ColorPalette;
  blue: ColorPalette;
  cyan: ColorPalette;
  teal: ColorPalette;
  green: ColorPalette;
  lime: ColorPalette;
  yellow: ColorPalette;
  orange: ColorPalette;
  success: ColorPalette;
  info: ColorPalette;
  warning: ColorPalette;
  danger: ColorPalette;
  [key: string]: ColorPalette;
}

export type PaletteInput = { +readonly [K in keyof Palette]+?: Palette[K] } & {
  color?: ColorPalette;
  primary?: ColorPalette;
  dark?: ColorPalette;
  gray?: ColorPalette;
  red?: ColorPalette;
  pink?: ColorPalette;
  grape?: ColorPalette;
  violet?: ColorPalette;
  indigo?: ColorPalette;
  blue?: ColorPalette;
  cyan?: ColorPalette;
  teal?: ColorPalette;
  green?: ColorPalette;
  lime?: ColorPalette;
  yellow?: ColorPalette;
  orange?: ColorPalette;
  success?: ColorPalette;
  info?: ColorPalette;
  warning?: ColorPalette;
  danger?: ColorPalette;
  [key: string]: ColorPalette;
}

const color = {
  white: '#FFFFFF',
  black: '#1B1C1D',
};

// Colors
const dark = {
  0: '#D5D7E0',
  1: '#ACAEBF',
  2: '#8C8FA3',
  3: '#666980',
  4: '#4D4F66',
  5: '#34354A',
  6: '#2B2C3D',
  7: '#1D1E30',
  8: '#0C0D21',
  9: '#01010A',
  default: '#34354A',
  transparent: {
    0: 'rgba(52,53,74, 0.08)',
    1: 'rgba(52,53,74, 0.16)',
    2: 'rgba(52,53,74, 0.24)',
    3: 'rgba(52,53,74, 0.32)',
    4: 'rgba(52,53,74, 0.4)',
    5: 'rgba(52,53,74, 0.48)',
  },
};

const gray = {
  0: '#F1F2F4',
  1: '#D7DBDF',
  2: '#BEC4CB',
  3: '#A5ADB6',
  4: '#8B96A2',
  5: '#727F8D',
  6: '#5B6671',
  7: '#444C55',
  8: '#2D3339',
  9: '#17191C',
  default: '#727F8D',
  transparent: {
    0: 'rgba(114, 127, 141, 0.08)',
    1: 'rgba(114, 127, 141, 0.16)',
    2: 'rgba(114, 127, 141, 0.24)',
    3: 'rgba(114, 127, 141, 0.32)',
    4: 'rgba(114, 127, 141, 0.4)',
    5: 'rgba(114, 127, 141, 0.48)',
  },
};

const red = {
  0: '#FFF5F5',
  1: '#FFE3E3',
  2: '#FFC9C9',
  3: '#FFA8A8',
  4: '#FF8787',
  5: '#FF6B6B',
  6: '#FA5252',
  7: '#F03E3E',
  8: '#E03131',
  9: '#C92A2A',
  default: '#FF6B6B',
  transparent: {
    0: 'rgba(255, 107, 107, 0.08)',
    1: 'rgba(255, 107, 107, 0.16)',
    2: 'rgba(255, 107, 107, 0.24)',
    3: 'rgba(255, 107, 107, 0.32)',
    4: 'rgba(255, 107, 107, 0.4)',
    5: 'rgba(255, 107, 107, 0.48)',
  },
};

const pink = {
  0: '#FFF0F6',
  1: '#FFDEEB',
  2: '#FCC2D7',
  3: '#FAA2C1',
  4: '#F783AC',
  5: '#F06595',
  6: '#E64980',
  7: '#D6336C',
  8: '#C2255C',
  9: '#A61E4D',
  default: '#F06595',
  transparent: {
    0: 'rgba(240, 101, 149, 0.08)',
    1: 'rgba(240, 101, 149, 0.16)',
    2: 'rgba(240, 101, 149, 0.24)',
    3: 'rgba(240, 101, 149, 0.32)',
    4: 'rgba(240, 101, 149, 0.4)',
    5: 'rgba(240, 101, 149, 0.48)',
  },
};

const grape = {
  0: '#F8F0FC',
  1: '#F3D9FA',
  2: '#EEBEFA',
  3: '#E599F7',
  4: '#DA77F2',
  5: '#CC5DE8',
  6: '#BE4BDB',
  7: '#AE3EC9',
  8: '#9C36B5',
  9: '#862E9C',
  default: '#CC5DE8',
  transparent: {
    0: 'rgba(204, 93, 232, 0.08)',
    1: 'rgba(204, 93, 232, 0.16)',
    2: 'rgba(204, 93, 232, 0.24)',
    3: 'rgba(204, 93, 232, 0.32)',
    4: 'rgba(204, 93, 232, 0.4)',
    5: 'rgba(204, 93, 232, 0.48)',
  },
};

const violet = {
  0: '#F3F0FF',
  1: '#E5DBFF',
  2: '#D0BFFF',
  3: '#B197FC',
  4: '#9775FA',
  5: '#845EF7',
  6: '#7950F2',
  7: '#7048E8',
  8: '#6741D9',
  9: '#5F3DC4',
  default: '#845EF7',
  transparent: {
    0: 'rgba(132, 94, 247, 0.08)',
    1: 'rgba(132, 94, 247, 0.16)',
    2: 'rgba(132, 94, 247, 0.24)',
    3: 'rgba(132, 94, 247, 0.32)',
    4: 'rgba(132, 94, 247, 0.4)',
    5: 'rgba(132, 94, 247, 0.48)',
  },
};

const indigo = {
  0: '#EDF2FF',
  1: '#DBE4FF',
  2: '#BAC8FF',
  3: '#91A7FF',
  4: '#748FFC',
  5: '#5C7CFA',
  6: '#4C6EF5',
  7: '#4263EB',
  8: '#3B5BDB',
  9: '#364FC7',
  default: '#5C7CFA',
  transparent: {
    0: 'rgba(92, 124, 250, 0.08)',
    1: 'rgba(92, 124, 250, 0.16)',
    2: 'rgba(92, 124, 250, 0.24)',
    3: 'rgba(92, 124, 250, 0.32)',
    4: 'rgba(92, 124, 250, 0.4)',
    5: 'rgba(92, 124, 250, 0.48)',
  },
};

const blue = {
  0: '#E7F5FF',
  1: '#D0EBFF',
  2: '#A5D8FF',
  3: '#74C0FC',
  4: '#4DABF7',
  5: '#339AF0',
  6: '#228BE6',
  7: '#1C7ED6',
  8: '#1971C2',
  9: '#1864AB',
  default: '#339AF0',
  transparent: {
    0: 'rgba(51, 154, 240, 0.08)',
    1: 'rgba(51, 154, 240, 0.16)',
    2: 'rgba(51, 154, 240, 0.24)',
    3: 'rgba(51, 154, 240, 0.32)',
    4: 'rgba(51, 154, 240, 0.4)',
    5: 'rgba(51, 154, 240, 0.48)',
  },
};

const cyan = {
  0: '#E3FAFC',
  1: '#C5F6FA',
  2: '#99E9F2',
  3: '#66D9E8',
  4: '#3BC9DB',
  5: '#22B8CF',
  6: '#15AABF',
  7: '#1098AD',
  8: '#0C8599',
  9: '#0B7285',
  default: '#22B8CF',
  transparent: {
    0: 'rgba(34, 184, 207, 0.08)',
    1: 'rgba(34, 184, 207, 0.16)',
    2: 'rgba(34, 184, 207, 0.24)',
    3: 'rgba(34, 184, 207, 0.32)',
    4: 'rgba(34, 184, 207, 0.4)',
    5: 'rgba(34, 184, 207, 0.48)',
  },
};

const teal = {
  0: '#E6FCF5',
  1: '#C3FAE8',
  2: '#96F2D7',
  3: '#63E6BE',
  4: '#38D9A9',
  5: '#20C997',
  6: '#12B886',
  7: '#0CA678',
  8: '#099268',
  9: '#087F5B',
  default: '#20C997',
  transparent: {
    0: 'rgba(32, 201, 151, 0.08)',
    1: 'rgba(32, 201, 151, 0.16)',
    2: 'rgba(32, 201, 151, 0.24)',
    3: 'rgba(32, 201, 151, 0.32)',
    4: 'rgba(32, 201, 151, 0.4)',
    5: 'rgba(32, 201, 151, 0.48)',
  },
};

const green = {
  0: '#ebfbee',
  1: '#d3f9d8',
  2: '#b2f2bb',
  3: '#8ce99a',
  4: '#69db7c',
  5: '#51cf66',
  6: '#40c057',
  7: '#37b24d',
  8: '#2f9e44',
  9: '#2b8a3e',
  default: '#51cf66',
  transparent: {
    0: 'rgba(81, 207, 102, 0.08)',
    1: 'rgba(81, 207, 102, 0.16)',
    2: 'rgba(81, 207, 102, 0.24)',
    3: 'rgba(81, 207, 102, 0.32)',
    4: 'rgba(81, 207, 102, 0.4)',
    5: 'rgba(81, 207, 102, 0.48)',
  },
};

const lime = {
  0: '#F4FCE3',
  1: '#E9FAC8',
  2: '#D8F5A2',
  3: '#C0EB75',
  4: '#A9E34B',
  5: '#94D82D',
  6: '#82C91E',
  7: '#74B816',
  8: '#66A80F',
  9: '#5C940D',
  default: '#94D82D',
  transparent: {
    0: 'rgba(148, 216, 45, 0.08)',
    1: 'rgba(148, 216, 45, 0.16)',
    2: 'rgba(148, 216, 45, 0.24)',
    3: 'rgba(148, 216, 45, 0.32)',
    4: 'rgba(148, 216, 45, 0.4)',
    5: 'rgba(148, 216, 45, 0.48)',
  },
};

const yellow = {
  0: '#FFF9DB',
  1: '#FFF3BF',
  2: '#FFEC99',
  3: '#FFE066',
  4: '#FFD43B',
  5: '#FCC419',
  6: '#FAB005',
  7: '#F59F00',
  8: '#F08C00',
  9: '#E67700',
  default: '#FCC419',
  transparent: {
    0: 'rgba(252, 196, 25, 0.08)',
    1: 'rgba(252, 196, 25, 0.16)',
    2: 'rgba(252, 196, 25, 0.24)',
    3: 'rgba(252, 196, 25, 0.32)',
    4: 'rgba(252, 196, 25, 0.4)',
    5: 'rgba(252, 196, 25, 0.48)',
  },
};

const orange = {
  0: '#FFF4E6',
  1: '#FFE8CC',
  2: '#FFD8A8',
  3: '#FFC078',
  4: '#FFA94D',
  5: '#FF922B',
  6: '#FD7E14',
  7: '#F76707',
  8: '#E8590C',
  9: '#D9480F',
  default: '#FF922B',
  transparent: {
    0: 'rgba(255, 146, 43, 0.08)',
    1: 'rgba(255, 146, 43, 0.16)',
    2: 'rgba(255, 146, 43, 0.24)',
    3: 'rgba(255, 146, 43, 0.32)',
    4: 'rgba(255, 146, 43, 0.4)',
    5: 'rgba(255, 146, 43, 0.48)',
  },
};

// Primary
const primary = {
  0: '#EAF3FA',
  1: '#C5DCF1',
  2: '#A0C6E8',
  3: '#7BAFE0',
  4: '#5698D7',
  5: '#3182CE',
  6: '#2768A5',
  7: '#1D4E7C',
  8: '#143452',
  9: '#0A1A29',
  default: '#3182CE',
  transparent: {
    0: 'rgba(40, 130, 206, 0.08)',
    1: 'rgba(40, 130, 206, 0.16)',
    2: 'rgba(40, 130, 206, 0.24)',
    3: 'rgba(40, 130, 206, 0.32)',
    4: 'rgba(40, 130, 206, 0.4)',
    5: 'rgba(40, 130, 206, 0.48)',
  },
};

const success = _.assign({},green);

const info = _.assign({},blue);

const warning = _.assign({},yellow);

const danger = _.assign({},red);

export const defaultPallete = {
  color,
  primary,
  dark,
  gray,
  red,
  pink,
  grape,
  violet,
  indigo,
  blue,
  cyan,
  teal,
  green,
  lime,
  yellow,
  orange,
  success,
  info,
  warning,
  danger,
};

const createPalette = (palette?: PaletteInput): Palette => {
  return _.merge(defaultPallete, palette);
};

export default createPalette;
