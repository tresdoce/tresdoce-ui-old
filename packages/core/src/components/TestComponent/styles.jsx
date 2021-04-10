import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  width: 360px;
  text-align: center;
  ${(props) =>
  props.type === "secondary" &&
  `background-color: black;
     color: white;`}
`;

export const StyledHeading = styled.h1`
  ${(props) => `
    font-size: ${props.theme.typography.fontSizeH1}
  `}
`;

export const StyledDescription = styled.h2`
  ${(props) => `
    font-size: ${props.theme.typography.fontSizeH2}
  `}
`;
