import styled, { css } from 'styled-components';
import { StyleTextProps } from './Text.types';

export const textStyle = css`
  ${({ theme }) => `
    font-family: ${theme.typography.family.primary};
    letter-spacing: ${theme.typography.letterSpacing.normal};
    /*color: ${theme.palette.color.black};
    font-size: ${theme.typography.variants.p.size};
    font-weight: ${theme.typography.weight.normal};*/
  `};
`;

export const P = styled.p<StyleTextProps>`
  ${textStyle};
  ${({ theme, color, size, align, fontStyle, weight, capitalize}) => `
    color: ${color ? color : theme.palette.color.black};
    font-size: ${size ? size: theme.typography.variants.p.size};
    line-height: ${theme.typography.variants.p.lineHeight};
    text-align: ${align ? theme.typography.align[align] : 'left'};
    font-style: ${fontStyle ? theme.typography.fontStyle[fontStyle] : 'normal'};
    font-weight: ${weight ? theme.typography.weight[weight] : theme.typography.variants.p.weight};
    text-transform: ${capitalize ? theme.typography.capitalize[capitalize] : 'initial'};
  `};
`;
