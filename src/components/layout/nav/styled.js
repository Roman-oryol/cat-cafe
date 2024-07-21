import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../ui/button/button";

export const LinkToMain = styled(Button)`
  padding: 0;
  width: auto;
  min-width: 0;
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorBlackForText};
  font-size: 18px;
  font-weight: 700;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorWhite};
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;
