import React, { PropsWithChildren } from "react";

interface ButtonProps {
  fullWidth?: boolean;
}
const Button = ({ children, fullWidth }: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={`bg-primary text-white py-4 px-11 rounded-md ${fullWidth ? 'w-full' : 'w-fit'}`}>
      {children}
    </button>
  )
};

export default Button;
