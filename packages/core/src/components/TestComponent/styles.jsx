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
    font-weight: ${props.theme.typography.weight.bold};
    letter-spacing: ${props.theme.typography.letterSpacing.neg01}
  `}
`;

export const StyledDescription = styled.h2`
  ${(props) => `
    font-family: ${props.theme.typography.family.light};
    font-size: ${props.theme.typography.applicationsSizes.H2};
    font-weight: ${props.theme.typography.weight.light};
    letter-spacing: ${props.theme.typography.letterSpacing.neg01}
  `}
`;
