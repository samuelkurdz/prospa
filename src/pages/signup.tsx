import React from "react";
import Button from "../components/Button";
import Sidebar from '../components/Sidebar';

const SignUp = () => {
  return (
    <div className="signup grid grid-cols-5 auto-rows-max">
      <Sidebar signup />
      <div className="col-span-4 h-screen">
        {/* <Button name="name">Name</Button> */}
      </div>
    </div>
  )
};

export default SignUp;
