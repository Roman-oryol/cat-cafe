import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, StyledLogoMainPage } from "./style";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImage />
    </StyledLogoMainPage>
  ) : (
    <StyledLogo $link={AppRoute.MAIN}>
      <LogoImage />
    </StyledLogo>
  );
}

export default Logo;
