import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import Container from "../Shared/Container";
import TopDesign from "./TopDesign/TopDesign";

const Home = () => {

  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    fetch('portfolio.json')
      .then(res => res.json())
      .then(data => {
        const topFive = data.slice(0, 5); // Extracts the top 5 items
        setPortfolioData(topFive);
      });
  }, []);

  return (
    <>
      <Hero />
      <Container>
        <div className="grid grid-cols-3 gap-5 my-5">
          <div className="col-span-2">
            <TopDesign portfolioData={portfolioData} />
          </div>
          <div>B</div>
        </div>
      </Container>
    </>
  );
};

export default Home;