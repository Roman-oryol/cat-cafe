import { useLocation, Link } from "react-router-dom";
import Button from "../../ui/button/button";
import { AppRoute } from "/src/const";
import { LinkToMain } from "./styled";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <LinkToMain to={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </LinkToMain>
    ),
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button minWidth={260} link={AppRoute.BUY}>
        Купить билет
      </Button>
    ),
  },
];

function Nav() {
  const { pathname } = useLocation();
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pathname)
        .map((button) => button.button)}
    </nav>
  );
}

export default Nav;
