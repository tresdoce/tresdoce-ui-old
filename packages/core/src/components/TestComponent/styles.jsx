import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  width: 460px;
  text-align: center;
  ${(props) =>
      props.type === 'secondary' && `
        background-color: black;
        color: white;
     `}
`;

export const StyledHeading = styled.h1`
  ${({ theme }) => `
    font-family: ${theme.typography.family.bold};
    font-size: ${theme.typography.applicationsSizes.H1};
    letter-spacing: ${theme.typography.letterSpacing.neg01}
  `}
`;

export const StyledDescription = styled.h2`
  ${({ theme }) => `
    font-family: ${theme.typography.family.regular};
    font-size: ${theme.typography.applicationsSizes.H2};
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
