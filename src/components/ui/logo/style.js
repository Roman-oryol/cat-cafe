import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const logoStyle = css`
  width: 208px;
  height: 44px;
`;

export const StyledLogo = styled(Link).attrs(({ $link }) => ({
  to: $link,
}))`
  ${logoStyle};
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle};
`;
