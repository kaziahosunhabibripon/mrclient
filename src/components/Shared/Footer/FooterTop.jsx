import Logo from "@/components/Logo/Logo";
import React from "react";

const FooterTop = () => {
  return (
    <div>
      <div className="flex gap-8">
        <div className="flex-shrink-0 mr-4">
          <div className="px-8">
            <Logo />
          </div>
          <div className="p-1 py-2 space-y-1">
            <h1 className="text-white py-1 leading-none text-xl flex justify-start font-medium">
              Mahfujurrahm535
            </h1>
            <h1 className="text-white py-1 flex justify-center text-sm font-normal">
              Graphic Designer
            </h1>
          </div>
        </div>

        <div className="text-white flex justify-center gap-4 flex-1">
          <div className="p-1">
            <div className="p-1">Home</div>
            <div className="p-1 border-b-2 border-gray pb-4">About</div>
          </div>
        </div>

        <div className="text-white flex justify-center gap-4 flex-1">
          <div className="p-1">
            <div className="p-1">Designs</div>
            <div className="p-1">Companies</div>
          </div>
        </div>

        <div className="text-white flex justify-center gap-4 flex-1">
          <div className="p-1">
            <div className="p-1">Price List</div>
            <div className="p-1">Project</div>
          </div>
        </div>

        <div className="text-white flex justify-center gap-4 flex-1">
          <div className="p-1">
            <div className="p-1">Contact</div>
            <div className="p-1">Affiliate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
