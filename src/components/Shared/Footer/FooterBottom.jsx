import React from "react";
import { Separator } from "@/components/ui/separator";
const FooterBottom = () => {
  return (
    <div className="mt-2 ">
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm text-white">
        <div>Terms and Conditions</div>
        <Separator orientation="vertical" />
        <div>Privacy Policy</div>
      </div>
    </div>
  );
};

export default FooterBottom;
