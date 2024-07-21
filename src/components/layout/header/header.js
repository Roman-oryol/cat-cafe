import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledHeader, HeaderInner } from "./style";

function Header() {
  return (
    <StyledHeader>
      <HeaderInner>
        <Logo />
        <Nav />
      </HeaderInner>
    </StyledHeader>
  );
}

export default Header;
