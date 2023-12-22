import React from "react";
import Container from "../../Container";
import Logo from "@/components/Logo/Logo";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="py-[32px] font-montserrat bg-[#0C0C0C]">
      <Container className="text-white">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <Logo />
          </Link>
          <div className="relative w-1/3">
            <div className="absolute rounded-lg m-[3px] px-2 p-2 inset-y-0 right-0 text-white flex items-center justify-center "></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
