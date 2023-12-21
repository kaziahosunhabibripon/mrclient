import React from "react";
import Banner from "../../assets/Source/Web Banner 1.svg";
const Hero = () => {
  return (
    <div className="relative isolate ">
      <div className="mx-auto">
        <div className="absolute top-[10%] left-[28%] transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold ">
          <h1 className="text-[#1B8CDC]">Musfiqurraham535</h1>
        </div>

        <img
          src={Banner}
          alt="Your Alt Text"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
