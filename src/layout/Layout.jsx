import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import Burger from "./burger/Burger.jsx";

function Layout() {
  const [isBurger, setIsBurger] = React.useState(false);

  return (
    <>
      <Header isBurger={isBurger} setIsBurger={setIsBurger} />
      <Burger isBurger={isBurger} setIsBurger={setIsBurger} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
