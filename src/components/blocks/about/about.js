import { TitleSize } from "/src/components/ui/title/title";
import {
  StyledSection,
  AboutInner,
  TextWrapper,
  AboutTitle,
  Text,
  WorkTime,
  Address,
} from "./style";

function About({ level }) {
  return (
    <StyledSection>
      <AboutInner>
        <TextWrapper>
          <AboutTitle size={TitleSize.BIG} level={level}>
            Первое в России котокафе
          </AboutTitle>
          <Text className="about__text">
            Крупнейшее котокафе России, в котором живёт 50 кошек и котов,
            и каждый из них ищет новый дом. Животных можно гладить,
            фотографировать, играть с ними.
          </Text>
          <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
          <Address>
            Санкт-Петербург, набережная реки Карповки, дом 5, литера П
          </Address>
        </TextWrapper>
      </AboutInner>
    </StyledSection>
  );
}

export default About;
