import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";

const Login = () => {
  return (
    <div className="login grid grid-cols-5 auto-rows-max">
      <Sidebar />
      <div className="col-span-4 h-screen">
        <nav className="flex justify-end pt-9 px-24 font-semibold mb-28">
          <p>
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </nav>

        <div className="flex justify-center">
          <div>
            <h3 className="font-semibold text-3xl">Welcome back to Prospa</h3>
            <p className="text-subText">
              An account, with powerful, personalised tools <br />
              all in one place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
