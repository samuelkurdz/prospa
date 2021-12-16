import React, { PropsWithChildren } from "react";

interface ButtonProps {
  name: string;
}

const Button = ({ name, children }: PropsWithChildren<ButtonProps>) => {
  return (
    <button className="bg-primary text-white py-4 px-11 rounded-md">
      {children}
    </button>
  )
};

export default Button;
