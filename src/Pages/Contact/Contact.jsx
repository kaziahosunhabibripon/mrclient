import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { IoIosLink } from "react-icons/io";
const Contact = () => {
  return (
    <div className="flex justify-center flex-col  items-center my-6 w-full">
      <div className="max-w-4xl text-center my-5">
        <h1 className="font-montserrat text-3xl font-semibold">
          If you have any questions or inquiries about our services, please feel
          free to contact us by filling out this from
        </h1>
      </div>
      <div className="w-1/2">
        <Card className="w-full">
          <CardContent className="space-y-2 bg-[#FFEFEF]">
            <form className="py-4 flex flex-col gap-4 ">
              <div>
                <Input className="rounded-none" placeholder="Name" />
              </div>
              <div>
                <Input className="rounded-none" placeholder="Email" />
              </div>
              <div>
                <Input
                  className="rounded-none"
                  placeholder="Website/Facebook"
                />
              </div>
              <div className="flex items-center relative">
                <Input className="rounded-none" placeholder="Example Design" />
                <div className="absolute  inset-y-0 right-0 flex items-center justify-center mr-5">
                  <IoIosLink />
                </div>
              </div>

              <div>
                <Input className="rounded-none" placeholder="Password" />
              </div>

              <div className="flex items-center justify-between">
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none rounded-none"
                />
              </div>
              <div className="flex justify-center px-4 mt-1">
                <Button className="w-1/4 rounded-none bg-blue-500 hover:bg-blue-600 font-medium">
                  SUBMIT
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
