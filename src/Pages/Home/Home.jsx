import {
  useGetAdminUserByEmailQuery,
} from "@/redux/features/adminUser/adminUserApi";
import React from "react";
import Hero from "../Hero/Hero";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { logout } from "@/redux/features/users/userSlice";

const Home = () => {
  const { email, name, } = useSelector((state) => state.userSlice);
  console.log(email)
  const dispatch = useDispatch();
  const {
    data: adminUserData,
    isLoading
  } = useGetAdminUserByEmailQuery({email});
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    signOut(auth)
    dispatch(logout());
    alert("You have been logged out");
  };

  return (
    <div>
      {
        adminUserData?.data?.name
      }
      <Button onClick={handleLogout}>Logout</Button>
      <h1 className="text-4xl text-green-500">{email}</h1>
      <h1 className="text-4xl text-green-500">{name}</h1>
      <Hero />
    </div>
  );
};

export default Home;
