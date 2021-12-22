import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { pageAnimation } from '../constants/animations';
import Button from "../components/Button";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";

const Login = () => {
  let navigate = useNavigate();
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="login grid grid-cols-1 lg:grid-cols-5"
      >
      <Sidebar />
      <div className="col-span-4 h-screen">
        <nav className="flex justify-end p-5 md:pt-9 md:px-24 font-semibold mb-12 md:mb-28">
          <p>
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </nav>

        <section className="flex justify-center">
          <div className=" w-11/12 md:w-375">
            <header>
              <h3 className="font-semibold text-3xl">Welcome back to Prospa</h3>
              <p className="text-subText">
                An account, with powerful, personalised tools <br />
                all in one place
              </p>
            </header>
            <form className="mt-6 md:mt-12">
              <Input
                inputName="email"
                type="email"
                label="Email address"
                required
              />
              <Input
                inputName="password"
                type="password"
                label="Enter password"
                required
              />
              <Button fullWidth onClick={() => navigate("/home")}>
                Next
              </Button>
            </form>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Login;

// box-shadow: 0px 0px 2px rgba(131, 151, 171, 0.12), 0px 4px 8px rgba(131, 151, 171, 0.24);