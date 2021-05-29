import styled, { css } from 'styled-components';
import { StyleTitleProps } from './Title.types';

export const headingStyle = css`
  ${({ theme }) => `
    font-family: ${theme.typography.family.primary};
    font-weight: ${theme.typography.weight.normal};
    letter-spacing: ${theme.typography.letterSpacing.normal};
  `};
`;

export const H1 = styled.h1<StyleTitleProps>`
  ${headingStyle};
  ${ ({ theme, align }) => `
    font-size: ${theme.typography.variants.H1.size};
    font-weight: ${theme.typography.variants.H1.weight};
    line-height: ${theme.typography.variants.H1.lineHeight};
    text-align: ${ align ? theme.typography.align[align] : 'left'};
  `};
`;

export const H2 = styled.h2<StyleTitleProps>`
  ${headingStyle};
  ${({ theme, align }) => `
    font-size: ${theme.typography.variants.H2.size};
    font-weight: ${theme.typography.variants.H1.weight};
    line-height: ${theme.typography.variants.H2.lineHeight};
    text-align: ${ align ? theme.typography.align[align] : 'left'};
  `};
`;

export const H3 = styled.h3<StyleTitleProps>`
  ${headingStyle};
  ${({ theme, align }) => `
    font-size: ${theme.typography.variants.H3.size};
    font-weight: ${theme.typography.variants.H3.weight};
    line-height: ${theme.typography.variants.H3.lineHeight};
    text-align: ${ align ? theme.typography.align[align] : 'left'};
  `};
`;

export const H4 = styled.h4<StyleTitleProps>`
  ${headingStyle};
  ${({ theme, align }) => `
    font-size: ${theme.typography.variants.H4.size};
    font-weight: ${theme.typography.variants.H4.weight};
    line-height: ${theme.typography.variants.H4.lineHeight};
    text-align: ${ align ? theme.typography.align[align] : 'left'};
  `};
`;

export const H5 = styled.h5<StyleTitleProps>`
  ${headingStyle};
  ${({ theme, align }) => `
    font-size: ${theme.typography.variants.H5.size};
    font-weight: ${theme.typography.variants.H5.weight};
    line-height: ${theme.typography.variants.H5.lineHeight};
    text-align: ${ align ? theme.typography.align[align] : 'left'};
  `};
`;

export const H6 = styled.h6<StyleTitleProps>`
  ${headingStyle};
  ${({ theme, align }) => `
    font-size: ${theme.typography.variants.H6.size};
    font-weight: ${theme.typography.variants.H6.weight};
    line-height: ${theme.typography.variants.H6.lineHeight};
    text-align: ${ align ? theme.typography.align[align] : 'left'};
  `};
`;
