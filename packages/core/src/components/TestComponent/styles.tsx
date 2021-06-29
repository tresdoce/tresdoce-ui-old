import styled from 'styled-components';
import { TestComponentProps } from './TestComponent.types';

export const StyledDiv = styled.div<TestComponentProps>`
  margin: auto;
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  width: 460px;
  text-align: center;
  ${(props) =>
      props.mode === 'secondary' && `
        background-color: black;
        color: white;
     `}
`;

export const StyledHeading = styled.h1`
  ${({ theme }) => `
    font-family: ${theme.typography.family.bold};
    font-size: ${theme.typography.variants.H1.size};
    line-height: ${theme.typography.variants.H1.lineHeight};
    letter-spacing: ${theme.typography.letterSpacing.neg01}
  `}
`;

export const StyledDescription = styled.h2`
  ${({ theme }) => `
    font-family: ${theme.typography.family.regular};
    font-size: ${theme.typography.variants.H2.size};
    line-height: ${theme.typography.variants.H2.lineHeight};
    letter-spacing: ${theme.typography.letterSpacing.neg01}
  `}
`;

export const StyledDescription2 = styled.h2`
  height: 100px;
  width: 100px;
  background: red;
  &:before {
    font-family: 'FontAwesome';
    content: "\f004";
  }
`;

/*export const StyledDescription2 = styled.h2(props => ({
  //fontFamily: `FontAwesome`,
  fontFamily: theme.typography.family.fontAwesome,
  height: "100px",
  width: "100px",
  background: "red",
  "::before": {
    content: "'\\f004'"
  }
}));*/
