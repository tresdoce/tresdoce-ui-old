import styled from 'styled-components';
import { ColProps } from './Col.types';
import { GridProps } from './Grid.types';

export const ColStyle = styled.div<ColProps>`
  border: 2px solid black;
  ${({ theme, grow, columns, span, spacing = 15, offset }) => `
    //padding: ${theme.spacing.default.space12};
    box-sizing: border-box;
    flex: ${grow ? '1' : '0'} 0 calc(${100 / (columns / span)}% - ${spacing}px);
    margin: calc(${spacing}px / 2);
    margin-left: calc(${100 / (columns / offset)}% + ${spacing / 2}px)
  `};
  
`

export const GridStyle = styled.div<GridProps>`
  border: 2px solid black;
  ${({ theme, justify, align, gutter }) => `
    //padding: ${theme.spacing.default.space12};
    //margin: calc(-${gutter}px / 2);
    display: flex;
    flex-wrap: wrap;
    justify-content: ${justify};
    align-items: ${align}';
  `};
`
