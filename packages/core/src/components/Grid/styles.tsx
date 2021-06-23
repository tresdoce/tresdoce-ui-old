import styled from 'styled-components';
import { GridStyleProps } from './Grid.types';
import { ColStyleProps } from './Col.types';

export const GridStyle = styled.div<GridStyleProps>`
  ${({ justify, align, row, spacing }) => `
    //margin: calc(-${spacing}px / 2);
    margin: 0 ${ row ? `-${spacing}px`:'0'};
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${justify};
    align-items: ${align};
  `};
`

export const ColStyle = styled.div<ColStyleProps>`
  ${({ grow, columns, span, spacing }) => `
    box-sizing: border-box;
    flex: ${grow ? '1' : '0'} 0 calc(${100 / (columns / span)}% - ${spacing}px);
    margin: calc(${spacing}px / 2);
  `};
`;
