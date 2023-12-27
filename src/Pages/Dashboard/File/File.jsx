import React from "react";

const File = () => {
  return (
    <>
      <div className="font-montserrat font-bold gap-4 text-white bg-[#1C91E4]">
        <div className="p-1">
          <label
            htmlFor="image"
            className="px-6 font-montserrat font-bold  text-white mb-2"
          >
            Image
          </label>
        </div>
        <div className="flex">
          <label
            htmlFor="image"
            className="py-2 px-3 bg-[#0c0d0fb4] text-md font-medium text-white cursor-pointer"
          >
            CHOOSE FILE
          </label>
          <input
            id="image"
            name="image"
            type="file"
            className="hidden"
            placeholder="Select image"
          />
        </div>
      </div>
    </>
  );
};

export default File;
