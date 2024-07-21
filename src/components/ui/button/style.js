import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-width: ${({ $minWidth }) => `${$minWidth}px` || "100%"};
  min-height: 60px;
  padding: 0 10px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeDefault};
  line-height: 27px;
  color: ${({ theme }) => theme.colorWhite};
  text-decoration: none;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colorForButton};
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colorForButtonHover};
    box-shadow: inset 0 4px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;
