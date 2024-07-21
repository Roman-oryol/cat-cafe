import styled from "styled-components";
import Container from "/src/components/ui/container/container";
import Title from "/src/components/ui/title/title";
import Ul from "/src/components/ui/elements/ul";
import bgImage1 from "/src/assets/bg-stars1.png";
import bgImage2 from "/src/assets/bg-stars2.png";
import bgImage3 from "/src/assets/bg-stars2.png";

export const StarsSection = styled.section`
  background: url(${bgImage1}) 0 23px / 213px 170px no-repeat,
    url(${bgImage2}) left 0 bottom 0 / 449px 304px no-repeat,
    url(${bgImage3}) right 0 bottom 0 / 111px 158px no-repeat;
  background-color: ${({ theme }) => theme.colorForDarkBackground};
`;

export const StarsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 80px;
`;

export const StarsTitle = styled(Title)`
  margin-bottom: 65px;
`;

export const List = styled(Ul)`
  display: flex;
  column-gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  box-sizing: border-box;
  width: 353px;
  margin-bottom: 45px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
`;
