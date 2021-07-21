import styled, { css } from 'styled-components';
import { CodeProps } from './Code.types';

export const CodePreBaseStyle = css`
  ${({ theme }) => `
    font-family: ${theme.typography.family.monospace};
    border: 1px solid ${theme.palette.gray[2]};
    color: ${theme.palette.gray[7]};
    background: ${theme.palette.gray.transparent[2]};
    border-radius: ${theme.radiuses.radius[4]};
    font-size: ${theme.typography.sizes.px12}px;
  `};
`;

export const CodeStyle = styled.code<CodeProps>`
  ${CodePreBaseStyle};
  ${({ theme }) => `
    padding: calc(${theme.spacing.default.space8}/2);
  `};
`;

export const PreStyle = styled.pre<CodeProps>`
  ${CodePreBaseStyle};
  ${({ theme }) => `
    padding: ${theme.spacing.default.space8};
    margin:0px;
    overflow-x: auto;
  `};
`;
