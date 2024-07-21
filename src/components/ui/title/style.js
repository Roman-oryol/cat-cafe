import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: ${({ size }) => {
    let fontSize = "36px";
    if (size === "big") {
      fontSize = "44px";
    }
    if (size === "small") {
      fontSize = "28px";
    }
    return fontSize;
  }};
  line-height: 1.15;
  font-weight: 700;
`;
