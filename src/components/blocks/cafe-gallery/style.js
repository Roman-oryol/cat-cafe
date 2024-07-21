import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import Container from "/src/components/ui/container/container";
import bgImage1 from "/src/assets/gallery-bg1.svg";
import bgImage2 from "/src/assets/gallery-bg2.svg";
import bgImage3 from "/src/assets/gallery-bg3.svg";

export const Section = styled.section`
  background: url(${bgImage2}) top 82px right 0 no-repeat,
    url(${bgImage1}) top 0 right 0 no-repeat,
    url(${bgImage3}) bottom 0 left 0 no-repeat;
  background-color: ${({ theme }) => theme.colorForDarkBackground};
`;

export const Wrapper = styled(Container)`
  padding-top: 80px;
  padding-bottom: 100px;
`;

export const GalleryTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;
`;
