import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-menubar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "@/redux/features/users/userSlice";

const Login = () => {
  const { email, name, isLoading } = useSelector((state) => state.userSlice);
  console.log(email)
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
  } = useForm();

  const onsubmit = (data) => {
    const { email, password } = data;
    console.log(email, password)
    dispatch(loginUser({ email, password }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="py-10 flex flex-col gap-5"
      >
        <div>
          <Label>Email</Label>
          <Input {...register("email", { required: true })} type="email" />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" {...register("password", { required: true })} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="remember" id="remember" />
            <p>Remember me</p>
          </div>
          <span className="text-blue-500">Forgot password?</span>
        </div>

        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
          Sign In
        </Button>
      </form>

      <h1 className="flex justify-center gap-1">
        Don't have an Account?
        <Link to={`/`} className="text-blue-500 font-semibold">
          Sign Up
        </Link>
      </h1>
    </>
  );
};

export default Login;
