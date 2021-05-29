import styled, { css } from 'styled-components';
import { StyleTitleProps } from './Title.types';

export const headingStyle = css`
  ${({ theme }) => `
    font-family: ${theme.typography.family.primary};
    letter-spacing: ${theme.typography.letterSpacing.normal};
    /*color: ${theme.palette.color.black};
    font-weight: ${theme.typography.weight.normal};*/
  `};
`;

export const H1 = styled.h1<StyleTitleProps>`
  ${headingStyle};
  ${({ theme, color, size, align, fontStyle, weight, capitalize }) => `
    color: ${color ? color : theme.palette.color.black};
    font-size: ${size ? size : theme.typography.variants.H1.size};
    line-height: ${theme.typography.variants.H1.lineHeight};
    text-align: ${align ? theme.typography.align[align] : 'left'};
    font-style: ${fontStyle ? theme.typography.fontStyle[fontStyle] : 'normal'};
    font-weight: ${weight ? theme.typography.weight[weight] : theme.typography.variants.H1.weight};
    text-transform: ${capitalize ? theme.typography.capitalize[capitalize] : 'initial'};
  `};
`;

export const H2 = styled.h2<StyleTitleProps>`
  ${headingStyle};
  ${({ theme, color, size, align, fontStyle, weight, capitalize }) => `
    color: ${color ? color : theme.palette.color.black};
    font-size: ${size ? size : theme.typography.variants.H2.size};
    line-height: ${theme.typography.variants.H2.lineHeight};
    text-align: ${align ? theme.typography.align[align] : 'left'};
    font-style: ${fontStyle ? theme.typography.fontStyle[fontStyle] : 'normal'};
    font-weight: ${weight ? theme.typography.weight[weight] : theme.typography.variants.H1.weight};
    text-transform: ${capitalize ? theme.typography.capitalize[capitalize] : 'initial'};
  `};
`;

export const H3 = styled.h3<StyleTitleProps>`
  ${headingStyle};
  ${({ theme, color, size, align, fontStyle, weight, capitalize }) => `
    color: ${color ? color : theme.palette.color.black};
    font-size: ${size ? size : theme.typography.variants.H3.size};
    line-height: ${theme.typography.variants.H3.lineHeight};
    text-align: ${align ? theme.typography.align[align] : 'left'};
    font-style: ${fontStyle ? theme.typography.fontStyle[fontStyle] : 'normal'};
    font-weight: ${weight ? theme.typography.weight[weight] : theme.typography.variants.H3.weight};
    text-transform: ${capitalize ? theme.typography.capitalize[capitalize] : 'initial'};
  `};
`;

export const H4 = styled.h4<StyleTitleProps>`
  ${headingStyle};
  ${({ theme, color, size, align, fontStyle, weight, capitalize }) => `
    color: ${color ? color : theme.palette.color.black};
    font-size: ${size ? size : theme.typography.variants.H4.size};
    line-height: ${theme.typography.variants.H4.lineHeight};
    text-align: ${align ? theme.typography.align[align] : 'left'};
    font-style: ${fontStyle ? theme.typography.fontStyle[fontStyle] : 'normal'};
    font-weight: ${weight ? theme.typography.weight[weight] : theme.typography.variants.H4.weight};
    text-transform: ${capitalize ? theme.typography.capitalize[capitalize] : 'initial'};
  `};
`;

export const H5 = styled.h5<StyleTitleProps>`
  ${headingStyle};
  ${({ theme, color, size, align, fontStyle, weight, capitalize }) => `
    color: ${color ? color : theme.palette.color.black};
    font-size: ${size ? size : theme.typography.variants.H5.size};
    line-height: ${theme.typography.variants.H5.lineHeight};
    text-align: ${align ? theme.typography.align[align] : 'left'};
    font-style: ${fontStyle ? theme.typography.fontStyle[fontStyle] : 'normal'};
    font-weight: ${weight ? theme.typography.weight[weight] : theme.typography.variants.H5.weight};
    text-transform: ${capitalize ? theme.typography.capitalize[capitalize] : 'initial'};
  `};
`;

export const H6 = styled.h6<StyleTitleProps>`
  ${headingStyle};
  ${({ theme, color, size, align, fontStyle, weight, capitalize }) => `
    color: ${color ? color : theme.palette.color.black};
    font-size: ${size ? size : theme.typography.variants.H6.size};
    line-height: ${theme.typography.variants.H6.lineHeight};
    text-align: ${align ? theme.typography.align[align] : 'left'};
    font-style: ${fontStyle ? theme.typography.fontStyle[fontStyle] : 'normal'};
    font-weight: ${weight ? theme.typography.weight[weight] : theme.typography.variants.H6.weight};
    text-transform: ${capitalize ? theme.typography.capitalize[capitalize] : 'initial'};
  `};
`;
