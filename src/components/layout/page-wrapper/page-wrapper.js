import { Outlet } from "react-router-dom";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { Wrapper, Main } from "./style";

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default PageWrapper;
