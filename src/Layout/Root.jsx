import Footer from "@/Pages/Shared/Footer/Footer";
import Header from "@/Pages/Shared/Header/Header";
import HomeFooter from "@/components/Shared/HomeFooter/HomeFooter";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
const Root = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div>
      <Header />
      <Outlet />
      {isHomePage ? <HomeFooter /> : <Footer />}
    </div>
  );
};

export default Root;
