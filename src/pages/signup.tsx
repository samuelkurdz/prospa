import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
import Select from "../components/Select";
import Radio from "../components/Radio";

import { countries } from "../constants/countries";

const radioOptions = [
  {
    optionLabel: 'I have a registered business /charity with CAC',
    optionValue: 'registered',
    optionDetailHeader: 'As a registered business you’ll get:',
    optionDetail: [
      'Account in your business name',
      'Send to and receive transfers from all Nigerian banks',
      'Tools for business management'
    ]
  },
  {
    optionLabel: 'My business is not yet registered, I would like to register',
    optionValue: 'unregistered',
    optionDetailHeader: 'Everything you need to start your business',
    optionDetail: [
      'Registered business name with the CAC',
      'Send to and receive transfers from all Nigerian banks',
      'Tools for business management'
    ]
  },
  {
    optionLabel: 'I’m a freelancer I do business in my personal name',
    optionValue: 'freelancer'
  },
]

const SignUp = () => {
  let navigate = useNavigate();

  return (
    <div className="login grid grid-cols-1 lg:grid-cols-5">
      <Sidebar signup />
      <div className="col-span-4 h-screen">
        <nav className="flex justify-end p-5 md:pt-9 md:px-24 font-semibold mb-12 md:mb-28">
          <p>
            Already a member? <Link to={"/"}>Sign In</Link>
          </p>
        </nav>

        <section className="flex justify-center">
          <div className="w-11/12 md:w-375">
            <header>
              <h3 className="font-semibold text-3xl">Create your account</h3>
              <p className="text-subText">
                A short description about account types
              </p>
            </header>
            <form className="mt-6 md:mt-12 space-y-8">
              <Radio radioName="businessType" options={radioOptions}  />
              <Button fullWidth>Next</Button>
            </form>
          </div>
        </section>
        {/* <section className="flex justify-center">
          <div className=" w-11/12 md:w-375">
            <header>
              <h3 className="font-semibold text-3xl">Create your account</h3>
              <p className="text-subText">
                A short description about account types
              </p>
            </header>
            <form className="mt-6 md:mt-12">
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
              <Button fullWidth onClick={() => navigate("/login")}>
                Next
              </Button>
            </form>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default SignUp;
