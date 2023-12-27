import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-menubar";

import { RxCross1 } from "react-icons/rx";
const BulletPoint = () => {
  return (
    <Card className="w-full rounded-none">
      <div className="p-2 bg-[#1C91E4] flex justify-between">
        <Label
          className="rounded-none font-semibold px-2 text-white"
          placeholder="Name"
        >
          Subcategory
        </Label>
      </div>
      <CardContent className="flex justify-evenly  font-montserrat font-medium  items-center bg-[#F2F9FF]">
        <div className="flex items-center">
          <button className="mt-5 px-2 py-1 text-gray-900 bg-white border-2 border-gray-200 flex items-center">
            Unlimited Revisions
            <span className="ml-2 text-red-600">
              <RxCross1 />
            </span>
          </button>
        </div>
        <div className="flex items-center">
          <button className="mt-5 px-2 py-1 text-gray-900 bg-white border-2 border-gray-200 flex items-center">
            PSD Source File
            <span className="ml-2 text-red-600">
              <RxCross1 />
            </span>
          </button>
        </div>
        <div className="flex items-center">
          <button className="mt-5 px-2 py-1 text-gray-900  flex items-center">
            Print Ready PDF
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BulletPoint;
