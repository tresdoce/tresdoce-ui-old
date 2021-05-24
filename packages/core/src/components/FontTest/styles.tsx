import styled, { css } from 'styled-components';

export const headingStyle = css`
  ${({ theme }) => `
    font-family: ${theme.typography.family.regular};
    font-weight: ${theme.typography.weight.normal};
    letter-spacing: ${theme.typography.letterSpacing.normal};
  `};
`
export const P = styled.p`
  ${headingStyle};
  ${({ theme }) => `
    font-size: ${theme.typography.variants.p.size};
    font-weight: ${theme.typography.variants.p.weight};
    line-height: ${theme.typography.variants.p.lineHeight};
  `};
`
