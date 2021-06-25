import styled from 'styled-components';
import { ContainerProps } from './Container.types';

export const ContainerStyle = styled.div<ContainerProps>`
  border: 1px solid black;
  ${({ theme, row, fluid, size }) => `
    box-sizing: content-box;
    padding: 0 ${ row ? '0' : `${ theme.grid.spacing.gutter[size]}px`};
    margin: 0 auto;
    width: 100%;
    max-width: ${ fluid ? '100%' : theme.sizing.maxWidth[size] };
  `};
`
