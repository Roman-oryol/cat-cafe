import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body,
html {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  position: relative;
  min-width: ${({ theme }) => theme.pageWidth};
  min-height: 100%;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: ${({ theme }) => theme.colorBlackForText};
}
`;
