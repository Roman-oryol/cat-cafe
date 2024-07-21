import styled from "styled-components";
import Container from "../../ui/container/container";
import aboutImage from "/src/assets/about.png";
import mapMark from "/src/assets/map-mark.svg";
import Title from "/src/components/ui/title/title";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colorForLightBackground};
`;

export const AboutInner = styled(Container)`
  background-image: url(${aboutImage});
  background-repeat: no-repeat;
  background-size: 446px 446px;
  background-position: top 77px right 70px;
`;

export const TextWrapper = styled.div`
  padding: 150px 500px 150px 0;
`;

export const AboutTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 40px;
  padding-right: 60px;
`;

export const WorkTime = styled.p`
  display: inline-block;
  margin: 0;
  margin-bottom: 20px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colorForDarkBackground};
`;

export const Address = styled.p`
  margin: 0;
  padding-left: 24px;
  background-image: url(${mapMark});
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: 0 center;
`;
