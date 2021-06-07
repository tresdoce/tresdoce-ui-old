import styled from 'styled-components';
import { GridProps } from './Grid.types';
import { ColProps } from './Col.types';

export const GridStyle = styled.div<GridProps>`
  ${({ theme, justify, align, gutter = theme.spacing.gutter.md }) => `
    //margin: calc(-${gutter}px / 2);
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${justify};
    align-items: ${align}';
  `};
`

export const ColStyle = styled.div<ColProps>`
  border: 1px solid black;
  ${({ theme, grow, columns, span, spacing = theme.spacing.gutter.md, offset }) => `
    box-sizing: border-box;
    flex: ${grow ? '1' : '0'} 0 calc(${100 / (columns / span)}% - ${spacing}px);
    margin: calc(${spacing}px / 2);
    margin-left: calc(${100 / (columns / offset)}% + ${spacing / 2}px);
  `};
`;
