import React from "react";
import Banner from "../../assets/Source/Web Banner 1.svg";
const Hero = () => {
  return (
    <div className="relative isolate font-montserrat">
      <div className="mx-auto">
        <div className="absolute flex items-center flex-col top-[17%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[#1B8CDC] text-4xl font-medium">
            Mahfujurrahm535
          </h1>
          <h1 className="text-[#4e4d4d] px-8 text-2xl font-normal">
            Graphic Designer
          </h1>
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
