import React from "react";
import Hero from "../Hero/Hero";
import { useSelector } from "react-redux";
import { useGetAdminUserByEmailQuery } from "@/redux/features/adminUser/adminUserApi";

const Home = () => {
  const { email } = useSelector((state) => state.userSlice);
  console.log(email);

  const { data: adminUserData, isLoading } = useGetAdminUserByEmailQuery({email});
  console.log(adminUserData?.data);
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
