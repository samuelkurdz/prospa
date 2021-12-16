import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";

const Login = () => {
  return (
    <div className="login grid grid-cols-5">
      <Sidebar />
      <div className="col-span-4 h-screen">
        <nav className="flex justify-end pt-9 px-24 font-semibold mb-28">
          <p>
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </nav>

        <section className="flex justify-center">
          <div className="w-[375px]">
            <header>
              <h3 className="font-semibold text-3xl">Welcome back to Prospa</h3>
              <p className="text-subText">
                An account, with powerful, personalised tools <br />
                all in one place
              </p>
            </header>
            <form className="mt-12">
              <Input inputName="email" type="email" label="Email address" required />
              <Input inputName="password" type="password" label="Enter password" required/>
              <Button>Next</Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
