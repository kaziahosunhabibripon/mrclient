import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-menubar";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <form className="py-10 flex flex-col gap-5">
        <div>
          <Label>Email</Label>
          <Input />
        </div>
        <div>
          <Label>Password</Label>
          <Input />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="remember" id="remember" />
            <p>Remember me</p>
          </div>
          <span className="text-blue-500">Forgot password?</span>
        </div>

        <Button className="w-full bg-blue-500 hover:bg-blue-600">
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
