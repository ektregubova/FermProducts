import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import advantagesList from "/src/mocks/advantagesList";
import products from "/src/mocks/products";
import { GlobalStyle } from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import Order from "/src/components/pages/order/order";
import MainPage from "/src/components/pages/main-page/main-page";
import ScrollTop from "/src/components/ui/scroll/scroll";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage advantages={advantagesList} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
