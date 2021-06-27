import styled from 'styled-components';
import { ContainerProps } from './Container.types';

export const ContainerStyle = styled.div<ContainerProps>`
  ${({ theme, row, fluid, size }) => `
    padding: 0 ${ row ? '0' : `${ theme.grid.spacing.gutter[size]}px`};
    margin: 0 auto;
    width: ${ fluid ? 'auto' : '100%' };
    max-width: ${ fluid ? '100%' : theme.sizing.width[size] };
  `};
`
