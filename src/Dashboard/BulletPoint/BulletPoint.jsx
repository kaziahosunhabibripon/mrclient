import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-menubar";
import { Button } from "@/components/ui/button";
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
      <CardContent className="flex justify-evenly gap-4  items-center bg-[#F2F9FF]">
        <button className="mt-5 text-gray-700 bg-white">
          Unlimited Revisions
        </button>
        <button className="mt-5 text-gray-500 bg-white">PSD Source File</button>
        <button className="mt-5 text-gray-500 bg-white">Print Ready PDF</button>
      </CardContent>
    </Card>
  );
};

export default BulletPoint;
