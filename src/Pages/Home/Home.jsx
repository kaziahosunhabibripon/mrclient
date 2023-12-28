import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import Container from "../Shared/Container";
import TopDesign from "./TopDesign/TopDesign";

const Home = () => {

  return (
    <>
      <Hero />
      <Container>
        <div className="grid grid-cols-3 gap-5 my-5">
          <div className="col-span-2">
            <TopDesign />
          </div>
          <div>B</div>
        </div>
      </Container>
    </>
  );
};

export default Home;