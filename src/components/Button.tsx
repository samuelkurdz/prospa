import React, { MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps {
  secondary?: boolean;
  small?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}
const Button = ({ children, secondary, fullWidth, small, onClick }: PropsWithChildren<ButtonProps>) => {
  return (
    // <button className={`bg-primary text-white py-4 px-11 rounded-md ${fullWidth ? 'w-full' : 'w-fit'}`}>
    <button onClick={onClick} className={`btn ${secondary ? 'btn--secondary': ''} ${fullWidth ? 'w-full' : 'w-fit'} ${small ? 'btn--small' : ''}`}>
      {children}
    </button>
  )
};

export default Button;
