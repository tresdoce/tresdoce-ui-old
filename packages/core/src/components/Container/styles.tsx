import styled from 'styled-components';
import { ContainerProps } from './Container.types';

export const ContainerStyle = styled.div<ContainerProps>`
  border: 2px solid black;
  ${({ theme, row, fluid, size }) => `
    padding: 0 ${ row ? '0' : `${ theme.grid.spacing.gutter[size]}px`};
    margin: auto;
    width: 100%;
    max-width: ${ fluid ? '100%' : theme.sizing.maxWidth[size] };
  `};
`
