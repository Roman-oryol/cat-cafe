import Logo from "/src/components/ui/logo/logo";
import { StyledFooter, FooterContainer, Copyright } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <Logo />
        <Copyright>Создано 2021</Copyright>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
