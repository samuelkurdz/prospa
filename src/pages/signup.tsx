import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";

const SignUp = () => {
  return (
    <div className="signup grid grid-cols-5 auto-rows-max">
      <Sidebar signup />
      <div className="col-span-4 h-screen">
        <nav className="flex justify-end pt-9 px-24 font-semibold mb-28">
          <p>
            Already a member? <Link to={"/"}>Sign In</Link>
          </p>
        </nav>

        <div className="flex justify-center">
          <header>
            <h3 className="font-semibold text-3xl">Create your account</h3>
            <p className="text-subText">
              A short description about account types
            </p>
          </header>
          <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          name="name"
          placeholder=" "
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
        <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
