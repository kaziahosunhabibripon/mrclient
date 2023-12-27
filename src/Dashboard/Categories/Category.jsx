import React from "react";
import Creatable from "react-select/creatable";
import { Label } from "@radix-ui/react-menubar";
const Category = () => {
  return (
    <>
      <div className="p-1">
        <div className="px-2 py-4 ">
          <Label className="rounded-none px-2" placeholder="Name">
            Category
          </Label>
          <div className="bg-[#F2F9FF] text-black">
            <Creatable
              isClearable
              options={[
                {
                  value: "Door Hanger Design",
                  label: "Door Hanger Design",
                },
                { value: "Flayer Design", label: "Flayer Design" },
              ]}
              className="border-none outline-none"
              placeholder="Select Design"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
