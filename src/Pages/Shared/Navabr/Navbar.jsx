import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetAdminUserByEmailQuery } from "@/redux/features/adminUser/adminUserApi";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  MenubarContent,
  MenubarItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator
} from "@/components/ui/menubar"

const Navbar = () => {

  const { email } = useSelector((state) => state.userSlice);
  console.log(email);
  const { data: AdminUserData, isLoading } = useGetAdminUserByEmailQuery({ email });

  console.log(AdminUserData);

  return (
    <Menubar className="bg-black font-montserrat border-none outline-none text-white">
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/"}>Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/inbox"}>Inbox </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/"}>Notifications</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/about"}>About</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/contact"}>Contact</Link>
        </MenubarTrigger>
      </MenubarMenu>

      {
        AdminUserData ?
          <MenubarMenu>
            <MenubarTrigger>
              <Avatar>
                <AvatarImage src={AdminUserData?.data?.image} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem inset>
                <Link to={"/contact"}>Profile</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>
                <Link to={"/admin-dashboard"}>Dashboard</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>
                <Link to={"/admin-dashboard"}>Log Out</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu> :
          <MenubarMenu>
            <Link to={"/authentication"}>Join</Link>
          </MenubarMenu>
      }

      <MenubarMenu>
        <MenubarTrigger className="w-full">
          <Link to={"/cart"}>
            <TiShoppingCart className="text-3xl" />
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
