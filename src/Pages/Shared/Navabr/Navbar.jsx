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
        <MenubarTrigger>
          {" "}
          <Link to={"/"}>Inbox </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/"}>Notifications</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/"}>About</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/"}>Contact</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/authentication"}>Join</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="w-full">
          <Link to={"/"}>
            <TiShoppingCart className="text-3xl" />
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
