import styled from 'styled-components';
import { ContainerStyleProps } from './Container.types';

export const ContainerStyle = styled.div<ContainerStyleProps>`
  ${({ theme, size, fluid, row }) => `
    display: block;
    padding: 0 ${row ? '0' : `${theme.grid.spacing.gutter[size]}px`};
    //padding: 0 ${theme.grid.spacing.gutter[size]}px;
    margin: 0 auto;
    width: ${fluid ? 'auto' : '100%'};
    max-width: ${fluid ? '100%' : theme.sizing.mqSizes[size].maxWidth};
  `};
`;
