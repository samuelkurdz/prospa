import React from "react";
import Button from "../components/Button";
import Sidebar from '../components/Sidebar';

const Login = () => {
  return (
    <div className="login grid grid-cols-5 auto-rows-max">
      <Sidebar />
      <div className="col-span-4 h-screen">
        {/* <Button name="name">Name</Button> */}
      </div>
    </div>
  )
};

export default Login;
