import React, { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren<{}>) => {
  return (
    <button className="bg-primary text-white py-4 px-11 rounded-md w-full">
      {children}
    </button>
  )
};

export default Button;
