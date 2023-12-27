import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-menubar";
import React from "react";
import Creatable from "react-select/creatable";
import { useForm } from "react-hook-form";
import { createUser } from "@/redux/features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const { email, name, isLoading } = useSelector((state) => state.userSlice);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  const onSubmit = (data) => {
    const { name, email, password } = data;
    dispatch(createUser({ email, password, name }));
  };

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
          <Input type="text" {...register("name", { required: true })} />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <Label>Username</Label>
          <Input type="text" {...register("username", { required: true })} />
          {errors.username && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <Input
          type="password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: {
                source: passwordRegex.source,
                flags: passwordRegex.flags,
              },
              message:
                "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
            },
          })}
        />

        <div>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            {...register("confirmPass", {
              required: "Confirmation password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPass && (
            <span className="text-red-500">{errors.confirmPass.message}</span>
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
