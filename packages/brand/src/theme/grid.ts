//https://medium.muz.li/responsive-grid-design-ultimate-guide-7aa41ca7892
import _ from 'lodash';
import { BreakPoints } from './sizing';

type KeyColumnStructure = string | number;

type ColumnStructure = {
  [K in keyof KeyColumnStructure]: number;
}

type SpacingBreakpoints = {
  [K in keyof BreakPoints]: number;
}

type GridSpacing = {
  [name: string]: SpacingBreakpoints;
}

export interface Grid {
  column: ColumnStructure;
  spacing: GridSpacing;
}

export type GridInput = { +readonly  [K in keyof Grid]+?: Grid[K]} & {
  column?:ColumnStructure;
  spacing?: GridSpacing;
}

const column = {
  8:8,
  12:12,
  16:16,
  20:20,
};

const spacing = {
  gutter: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28
  },
}

const defaultGrid = {
  column,
  spacing
}

const createGrid = (grid?: GridInput): Grid =>{
  return _.merge(defaultGrid, grid)
}

export default createGrid;
