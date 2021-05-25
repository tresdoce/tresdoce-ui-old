import styled, { css } from 'styled-components';
import { StyleTextProps } from './Text.types';

export const textStyle = css`
  ${({ theme }) => `
    font-family: ${theme.typography.family.regular};
    font-weight: ${theme.typography.weight.normal};
    letter-spacing: ${theme.typography.letterSpacing.normal};
  `};
`
export const P = styled.p<StyleTextProps>`
  ${textStyle};
  ${({ theme, align }) => `
    font-size: ${theme.typography.variants.p.size};
    font-weight: ${theme.typography.variants.p.weight};
    line-height: ${theme.typography.variants.p.lineHeight};
    text-align: ${ align ? theme.typography.align[align] : 'left'};
  `};
`
