import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-menubar";
import React from "react";
import Creatable from "react-select/creatable";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-10 flex flex-col gap-5"
      >
        <div>
          <Label>Country</Label>
          <Creatable
            isClearable
            options={[
              { value: "United States", label: "United States" },
              { value: "Canada", label: "Canada" },
              { value: "Mexico", label: "Mexico" },
              { value: "India", label: "India" },
              { value: "China", label: "China" },
              { value: "Japan", label: "Japan" },
              { value: "Russia", label: "Russia" },
              { value: "Germany", label: "Germany" },
              { value: "France", label: "France" },
              { value: "United Kingdom", label: "United Kingdom" },
              { value: "Italy", label: "Italy" },
              { value: "Brazil", label: "Brazil" },
              { value: "Bangladesh", label: "Bangladesh" },
            ]}
            className="w-full"
            placeholder="Select Country"
          />
        </div>

        <div>
          <Label>Full Name</Label>
          <Input {...register("name", { required: true })} />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <Label>Username</Label>
          <Input {...register("username", { required: true })} />
          {errors.username && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <Label>Email</Label>
          <Input
            {...register("email", {
              required: true,
              pattern: {
                value: passwordRegex,
                message:
                  "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <Label>Set Password</Label>
          <Input {...register("password", { required: true })} />
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <Label>Confirm Password</Label>
          <Input {...register("confirmPass", { required: true })} />
          {errors.confirmPass && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <Button className="w-full bg-blue-500 hover:bg-blue-600">
          Sign Up
        </Button>
      </form>

      <h1 className="text-center">
        Already have an Account?{" "}
        <span className="text-blue-500 font-semibold">Sign In</span>
      </h1>
    </>
  );
};

export default Register;
