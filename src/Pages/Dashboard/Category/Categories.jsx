import Container from "@/pages/Shared/Container";
import React, { useState } from "react";

import { Label } from "@radix-ui/react-menubar";
import Creatable from "react-select/creatable";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { RxCross1 } from "react-icons/rx";
import { Input } from "@/components/ui/input";
import { FaPlus } from "react-icons/fa";

const options = [
  {
    value: "Door Hanger Design",
    label: "Door Hanger Design",
  },
  { value: "Flayer Design", label: "Flayer Design" },
];
const Categories = () => {
  const [formValues, setFormValues] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const formData = {
      ...data,
      selectedOption,
      showRevisions,
      showPSD,
      showPrintPDF,
    };
    setFormValues(formData);

    console.log("Form data:", formData);
  };

  const [showRevisions, setShowRevisions] = useState(true);
  const [showPSD, setShowPSD] = useState(true);
  const [showPrintPDF, setShowPrintPDF] = useState(true);

  const handleRevisionsClick = () => {
    setShowRevisions(!showRevisions);
  };

  const handlePSDClick = () => {
    setShowPSD(!showPSD);
  };

  const handlePrintPDFClick = () => {
    // Ensure the Print Ready PDF cannot be removed
    if (!showRevisions && !showPSD) {
      setShowPrintPDF(true);
    } else {
      setShowPrintPDF(!showPrintPDF);
    }
  };

  const handleCategoryChange = (newValue, actionMeta) => {
    if (actionMeta.action === "create-option") {
      console.log("Creating new option:", newValue);
      setSelectedOption(newValue);
    } else {
      setSelectedOption(newValue);
    }
  };
  return (
    <div className="my-10 px-4">
      <Container>
        <div className="flex items-center justify-center my-6 w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="font-montserrat font-bold py-2 flex flex-col gap-4 my-6 w-[900px]"
          >
            <div className="gap-4 m-2  border-2 border-gray-200  text-white bg-[#1C91E4]">
              <div className="p-1">
                <div className="px-2 py-4 ">
                  <Label className="rounded-none px-2" placeholder="Name">
                    Category
                  </Label>
                  <div className="bg-[#F2F9FF] text-black">
                    <Creatable
                      id="category"
                      isClearable
                      className="border-none outline-none"
                      placeholder="Select Design"
                      onChange={handleCategoryChange}
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-4 m-2  border-2 text-white bg-[#1C91E4]">
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
                    {...register("image", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div className="gap-4 m-2  border-2">
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
                  <div className="py-4 flex flex-col gap-4">
                    <div>
                      <Input
                        type="text"
                        id="subcategory"
                        className="rounded-none font-normal"
                        placeholder="Subcategory Title"
                        {...register("subcategory", { required: true })}
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        id="amount"
                        className="rounded-none font-normal focus:ring-2 focus:ring-blue ring-transparent"
                        placeholder="Subcategory Amount"
                        {...register("amount", { required: true })}
                      />
                    </div>
                    <div className="flex items-center relative">
                      <Input
                        type="number"
                        id="deliveryTimes"
                        className="rounded-none font-normal"
                        placeholder="Regular Delivery Days"
                        {...register("deliveryTimes", { required: true })}
                      />
                    </div>

                    <div className="flex">
                      <Input
                        type="number"
                        id="firstDeliveryDays"
                        className="rounded-none font-normal  w-2/3"
                        placeholder="First Delivery days"
                        {...register("firstDeliveryDays", { required: true })}
                      />
                      <Input
                        type="number"
                        id="fdAmount"
                        className="rounded-none font-normal focus w-1/3"
                        placeholder="F.D. Amount"
                        {...register("fdAmount", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="border-2 font-thin border-gray-400 w-[250px]"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="gap-4 m-2  border-2">
              <Card className="w-full rounded-none">
                <div className="p-2 bg-[#1C91E4] flex justify-between">
                  <Label
                    className="rounded-none font-semibold px-2 text-white"
                    placeholder="Name"
                  >
                    Subcategory
                  </Label>
                </div>
                <CardContent className="flex justify-evenly font-montserrat font-medium items-center bg-[#F2F9FF]">
                  {showRevisions && (
                    <div className="flex items-center">
                      <button
                        onClick={handleRevisionsClick}
                        className="mt-5 px-2 py-1 text-gray-900 bg-white border-2 border-gray-200 flex items-center"
                      >
                        Unlimited Revisions
                        <span className="ml-2 text-red-600">
                          <RxCross1 />
                        </span>
                      </button>
                    </div>
                  )}
                  {showPSD && (
                    <div className="flex items-center">
                      <button
                        onClick={handlePSDClick}
                        className="mt-5 px-2 py-1 text-gray-900 bg-white border-2 border-gray-200 flex items-center"
                      >
                        PSD Source File
                        <span className="ml-2 text-red-600">
                          <RxCross1 />
                        </span>
                      </button>
                    </div>
                  )}
                  <div className="flex items-center">
                    <button
                      onClick={handlePrintPDFClick}
                      className="mt-5 px-2 py-1 text-gray-900  flex items-center"
                    >
                      Print Ready PDF
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center gap-4 m-2 ">
              <button
                type="submit"
                className="rounded-full bg-[#1C91E4] hover:bg-blue-700 text-white font-bold py-2 px-4"
              >
                CREATE
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
