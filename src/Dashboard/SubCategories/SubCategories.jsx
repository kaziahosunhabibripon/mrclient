import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-menubar";

import { FaPlus } from "react-icons/fa";
const SubCategories = () => {
  return (
    <>
      <Card className="w-full rounded-none">
        <div className="p-2 bg-[#1C91E4] flex justify-between">
          <Label
            className="rounded-none font-semibold px-2 text-white"
            placeholder="Name"
          >
            Subcategory
          </Label>
          <span className="mr-2">
            <FaPlus className="text-white" />
          </span>
        </div>
        <CardContent>
          <form className="py-4 flex flex-col gap-4">
            <div>
              <Input
                className="rounded-none font-normal"
                placeholder="Subcategory Title"
              />
            </div>
            <div>
              <Input
                className="rounded-none font-normal"
                placeholder="Subcategory Amount"
              />
            </div>
            <div className="flex items-center relative">
              <Input
                className="rounded-none font-normal"
                placeholder="Regular Delivery Days"
              />
            </div>

            <div className="flex">
              <Input
                className="rounded-none font-normal  w-2/3"
                placeholder="First Delivery days"
              />
              <Input
                className="rounded-none font-normal  w-1/3"
                placeholder="F.D. Amount"
              />
            </div>
          </form>
          <div className="flex justify-center">
            <div className="border-2 font-thin border-gray-400 w-[250px]"></div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SubCategories;
