import styled, { css } from "styled-components";
import Container from "/src/components/ui/container/container";
import leftBgImage from "/src/assets/order-bg.svg";
import catBgImage from "/src/assets/order-bg-cat.png";
import { default as TitleElement } from "/src/components/ui/title/title";
import Ul from "/src/components/ui/elements/ul";

export const Section = styled.section`
  background: url(${leftBgImage}) bottom 0 left 0 no-repeat;
  background-color: ${({ theme }) => theme.colorForLightBackground};
`;

export const Wrapper = styled(Container)`
  padding-top: 100px;
  padding-bottom: 100px;
  background: url(${catBgImage}) top 175px right 0 no-repeat;
`;

export const Title = styled(TitleElement)`
  margin-bottom: 24px;
`;

export const FormItem = styled.div`
  margin-bottom: 24px;
`;

export const Price = styled.span`
  display: block;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 27px;
  font-weight: 700;
`;

export const RadioButtonList = styled(Ul)`
  display: flex;
  column-gap: 12px;
`;

export const RadioLabelForTime = styled.span`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;

  ${({ $isChecked, theme }) =>
    $isChecked
      ? css`
          color: ${theme.colorWhite};
          background-color: ${theme.colorForButton};
        `
      : css`
          color: ${theme.colorBlackForText};
          background-color: ${theme.colorGray};
          cursor: pointer;
        `};
  // color: ${({ theme }) => theme.colorWhite};
`;

export const RadioLabelForType = styled.span`
  position: relative;
  display: flex;
  min-width: 420px;
  height: 100%;
  margin-left: -20px;
  padding-left: 46px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 20px;
    height: 17px;
    width: 17px;
    border: 1px solid ${(props) => props.theme.colorForButton};
    border-radius: 50%;
  }

  ${(props) =>
    props.$isChecked &&
    `
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 22px;
      height: 13px;
      width: 13px;
      background-color: ${props.theme.colorForButton};
      border-radius: 50%;
    }
  `}
`;

export const AccordionText = styled.div`
  font-size: 14px;
  line-height: 21px;

  & ul {
    margin: 0;
    padding: 0;
    margin-left: 15px;
  }

  & li {
    list-style-type: disc;
  }
`;
