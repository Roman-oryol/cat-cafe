import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import starList from "/src/mocks/star-list";
import gallery from "/src/mocks/gallery";
import buyOptions from "/src/mocks/buyOptions";
import { AppRoute } from "/src/const";
import { GlobalStyle } from "./style";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage stars={starList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage slides={gallery} buyOptions={buyOptions} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
