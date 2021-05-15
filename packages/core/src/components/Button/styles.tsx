import styled from 'styled-components';

export const ButtonStyle = styled.button`
  ${({theme}) => `
    background: ${theme.palette.primary[5]};
    font-family: ${theme.typography.family.regular};
    border: none;
    border-radius: ${theme.radiuses.defaultRadius};
    color: ${theme.palette.color.white};
    margin:0;
    padding: ${theme.spacing.default.space8} ${theme.spacing.default.space12};
  `};
  
  &:hover{
    ${({theme}) => `
      background: ${theme.palette.primary[3]};
      color: ${theme.palette.color.black};
    `};
  }  
`
