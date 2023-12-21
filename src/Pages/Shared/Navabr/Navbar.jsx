import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Menubar className="bg-black font-montserrat border-none outline-none text-white">
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/"}>Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Inbox</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Notifications</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>About</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Contact</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Join</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="w-full">
          <TiShoppingCart className="text-3xl" />
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
