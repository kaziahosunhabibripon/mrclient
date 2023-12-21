import React from "react";

import { Link } from "react-router-dom";
import Container from "../Container";
import { IoSearchOutline } from "react-icons/io5";
import Navbar from "../Navabr/Navbar";
import Logo from "@/components/Logo/Logo";
const Header = () => {
  return (
    <div>
      <div className="py-[32px] font-montserrat bg-[#0C0C0C]">
        <Container className="text-white">
          <div className="flex items-center justify-between">
            <Link to={"/"}>
              <Logo />
            </Link>
            <div className="relative w-1/3">
              <input
                type="text"
                placeholder="What design are you looking today ? "
                className="px-3 p-1 font-montserrat text-sm border rounded-lg w-full border-gray-300 focus:outline-none focus:border-gray-300"
              />

              <div className="absolute rounded-lg m-[3px] px-2 p-2 inset-y-0 right-0 text-white flex items-center justify-center  bg-[#1B8CDC]">
                <IoSearchOutline />
              </div>
            </div>
            <Navbar />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
