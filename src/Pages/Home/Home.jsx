import { useGetAdminUserByIdQuery } from "@/redux/features/adminUser/adminUserApi";
import React from "react";
import Hero from "../Hero/Hero";

const Home = () => {
  const { data } = useGetAdminUserByIdQuery(
    "800213d1-6d89-4109-8f0e-08a6760fab95"
  );
  console.log(data);
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
