import styled from 'styled-components';
import { CodeProps } from './Code.types';

export const CodeStyle = styled.code<CodeProps>`
  border: 2px solid black;
  ${({ theme }) => `padding: ${theme.spacing.default.space12};`};
`

export const PreStyle = styled.pre<CodeProps>`
  border: 2px solid black;
  ${({ theme }) => `padding: ${theme.spacing.default.space12};`};
`
