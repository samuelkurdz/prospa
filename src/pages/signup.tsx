import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
import Select from "../components/Select";

import { countries } from "../constants/countries";

const SignUp = () => {
  return (
    <div className="signup grid grid-cols-5">
      <Sidebar signup />
      <div className="col-span-4 h-screen">
        <nav className="flex justify-end pt-9 px-24 font-semibold mb-28">
          <p>
            Already a member? <Link to={"/"}>Sign In</Link>
          </p>
        </nav>

        <section className="flex justify-center">
          <div className="w-[375px]">
            <header>
              <h3 className="font-semibold text-3xl">Create your account</h3>
              <p className="text-subText">
                A short description about account types
              </p>
            </header>
            <form className="mt-12">
              <Input inputName="firstName" type="text" label="First name" />
              <Input inputName="lastName" type="text" label="Last name" />
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Select
                    inputName="country"
                    label="Country"
                    options={countries}
                    optionLabel="dialCode"
                    optionValue="isoCode"
                  />
                </div>
                <div className="col-span-2">
                  <Input inputName="mobile" type="text" label="Mobile number" />
                </div>
              </div>
              <Input inputName="email" type="email" label="Email Address" />
              <Button>Next</Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
