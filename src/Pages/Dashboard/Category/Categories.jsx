import Container from "@/pages/Shared/Container";
import React from "react";
import Category from "@/Dashboard/Categories/Category";
import File from "../File/File";
import SubCategories from "@/Dashboard/SubCategories/SubCategories";
import BulletPoint from "@/Dashboard/BulletPoint/BulletPoint";
const Categories = () => {
  return (
    <div>
      <Container>
        <div className="my-6 w-full">
          <form className="font-montserrat font-bold py-2 flex flex-col gap-4">
            <div className="gap-4 m-2  border-2 border-gray-200  text-white bg-[#1C91E4]">
              <Category />
            </div>
            <div className="gap-4 m-2  border-2 text-white bg-[#1C91E4]">
              <File />
            </div>
            <div className="gap-4 m-2  border-2">
              <SubCategories />
            </div>
            <div className="gap-4 m-2  border-2">
              <BulletPoint />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
