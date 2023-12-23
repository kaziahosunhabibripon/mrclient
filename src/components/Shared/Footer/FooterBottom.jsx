import React from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
const FooterBottom = () => {
  return (
    <div className="mt-2 ">
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm text-white">
        <div>
          <Link to="/terms-conditions">Terms and Conditions</Link>
        </div>
        <Separator orientation="vertical" />
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
