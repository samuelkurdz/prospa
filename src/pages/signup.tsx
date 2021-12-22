import React, { useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
import Select from "../components/Select";
import Radio from "../components/Radio";

import { countries } from "../constants/countries";
import { radioOptions } from "../constants/radioOptions";

const SignUp = () => {
  let navigate = useNavigate();
  const [step, setStep] = useState<number>(0);

  return (
    <div className="login grid grid-cols-1 lg:grid-cols-5">
      <Sidebar signup />
      <div className="col-span-4 h-screen">
        <nav className="flex justify-between p-5 md:pt-9 md:px-24 font-semibold mb-12 md:mb-28">
          <div>
            <svg
              className={`${step > 0 ? '' : 'hidden'} cursor-pointer`}
              onClick={() => setStep(0)}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32 5.33333C32 2.38781 29.6122 0 26.6667 0H5.33333C2.38781 0 0 2.38781 0 5.33333V26.6667C0 29.6122 2.38781 32 5.33333 32H26.6667C29.6122 32 32 29.6122 32 26.6667V5.33333ZM5.33333 1.33333H26.6667L26.9017 1.34012C29.0014 1.46179 30.6667 3.20309 30.6667 5.33333V26.6667L30.6599 26.9017C30.5382 29.0014 28.7969 30.6667 26.6667 30.6667H5.33333L5.0983 30.6599C2.99856 30.5382 1.33333 28.7969 1.33333 26.6667V5.33333L1.34012 5.0983C1.46179 2.99856 3.20309 1.33333 5.33333 1.33333Z"
                fill="#EEEFF7"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.688 24L20.8 22.8752L14.1912 15.9896L14.896 15.2552L14.892 15.2592L20.764 9.1416L19.6688 8C18.0456 9.6904 13.5144 14.4112 12 15.9896C13.1248 17.1624 12.028 16.0192 19.688 24Z"
                fill="#8397AB"
              />
            </svg>
          </div>
          <p>
            Already a member? <Link to={"/"}>Sign In</Link>
          </p>
        </nav>

        {step < 1 ? UserDetailForm(setStep, step) : userBusinessForm(navigate)}
      </div>
    </div>
  );
};

export default SignUp;

function userBusinessForm(navigate: NavigateFunction): React.ReactNode {
  return (
    <section className="flex justify-center">
      <div className="w-11/12 md:w-375">
        <header>
          <h3 className="font-semibold text-3xl">Create your account</h3>
          <p className="text-subText">
            A short description about account types
          </p>
        </header>
        <form className="mt-6 md:mt-12 space-y-8">
          <Radio radioName="businessType" options={radioOptions} />
          <Button fullWidth onClick={() => navigate("/login")}>
            Next
          </Button>
        </form>
      </div>
    </section>
  );
}

function UserDetailForm(
  setStep: React.Dispatch<React.SetStateAction<number>>,
  step: number
): React.ReactNode {
  function submitForm(e: any) {
    e.preventDefault();
    setStep(step + 1);
  }

  return (
    <section className="flex justify-center">
      <div className=" w-11/12 md:w-375">
        <header>
          <h3 className="font-semibold text-3xl">Create your account</h3>
          <p className="text-subText">
            A short description about account types
          </p>
        </header>
        <form className="mt-6 md:mt-12" onSubmit={submitForm}>
          <Input
            inputName="firstName"
            type="text"
            label="First name"
            required
          />
          <Input inputName="lastName" type="text" label="Last name" required />
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Select
                inputName="country"
                label="Country"
                options={countries}
                optionLabel="dialCode"
                required
                optionValue="isoCode"
              />
            </div>
            <div className="col-span-2">
              <Input
                inputName="mobile"
                type="text"
                label="Mobile number"
                required
              />
            </div>
          </div>
          <Input
            inputName="email"
            type="email"
            label="Email Address"
            required
          />
          <Button fullWidth>Next</Button>
        </form>
      </div>
    </section>
  );
}
