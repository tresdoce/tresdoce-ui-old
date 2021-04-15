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
  ${(props) => `
    font-family: ${props.theme.typography.family.bold};
    font-size: ${props.theme.typography.applicationsSizes.H1};
    letter-spacing: ${props.theme.typography.letterSpacing.neg01}
  `}
`;

export const StyledDescription = styled.h2`
  ${(props) => `
    font-family: ${props.theme.typography.family.regular};
    font-size: ${props.theme.typography.applicationsSizes.H2};
    letter-spacing: ${props.theme.typography.letterSpacing.neg01}
  `}
`;

export const StyledDescription2 = styled.h2(props => ({
  fontFamily: `FontAwesome`,
  height: "100px",
  width: "100px",
  background: "red",
  "::before": {
    content: "'\\f004'"
  }
}));
