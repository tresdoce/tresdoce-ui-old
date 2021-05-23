import styled, { css } from 'styled-components';

export const headingStyle = css`
  ${({ theme }) => `
    font-family: ${theme.typography.family.regular};
    font-weight: ${theme.typography.weight.normal};
    letter-spacing: ${theme.typography.letterSpacing.normal};
    color: #ccc;
  `};
`;

export const H1 = styled.h1`
  ${headingStyle};
  ${({ theme }) => `
    font-size: ${theme.typography.variants.H1.size};
    font-weight: ${theme.typography.variants.H1.weight};
    line-height: ${theme.typography.variants.H1.lineHeight};
  `};
`;

export const H2 = styled.h2`
  ${headingStyle};
  ${({ theme }) => `
    font-size: ${theme.typography.variants.H2.size};
    font-weight: ${theme.typography.variants.H1.weight};
    line-height: ${theme.typography.variants.H2.lineHeight};
  `};
`;

export const H3 = styled.h3`
  ${headingStyle};
  ${({ theme }) => `
    font-size: ${theme.typography.variants.H3.size};
    font-weight: ${theme.typography.variants.H3.weight};
    line-height: ${theme.typography.variants.H3.lineHeight};
  `};
`;

export const H4 = styled.h4`
  ${headingStyle};
  ${({ theme }) => `
    font-size: ${theme.typography.variants.H4.size};
    font-weight: ${theme.typography.variants.H4.weight};
    line-height: ${theme.typography.variants.H4.lineHeight};
  `};
`;

export const H5 = styled.h5`
  ${headingStyle};
  ${({ theme }) => `
    font-size: ${theme.typography.variants.H5.size};
    font-weight: ${theme.typography.variants.H5.weight};
    line-height: ${theme.typography.variants.H5.lineHeight};
  `};
`;

export const H6 = styled.h6`
  ${headingStyle};
  ${({ theme }) => `
    font-size: ${theme.typography.variants.H6.size};
    font-weight: ${theme.typography.variants.H6.weight};
    line-height: ${theme.typography.variants.H6.lineHeight};
  `};
`;
