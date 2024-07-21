import styled from "styled-components";
import { default as LiComponent } from "/src/components/styled/li/li";
import { ReactComponent as LeftArrow } from "/src/assets/left-arrow.svg";

export const Li = styled(LiComponent)`
  margin-bottom: 8px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: ${(props) => props.theme.colorGray};
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  z-index: 2;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colorBlackForText};
  margin: 0;
  border: 0;
  background: none;
  cursor: pointer;
  margin-right: -5px;
`;

export const Arrow = styled(LeftArrow)`
  transform: rotate(${(props) => (props.open ? "90deg" : "-90deg")}) scale(0.7);
  transition: transform 0.2s ease-out;
  & path {
    fill: black;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: ${(props) => `${props.open ? props.height : 1}px`};
  padding-top: 10px;
  margin-top: -11px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colorGray};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: height 0.2s ease-out;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  padding-top: 10px;
  box-sizing: border-box;
  z-index: 1;
`;
