import React, { HTMLInputTypeAttribute } from "react";

type InputProps = {
  inputName: string;
  type: HTMLInputTypeAttribute;
  label: string;
  required?: boolean;
};

const Input = ({ inputName, type, label, required }: InputProps) => {
  return (
    <div className="relative my-6">
      <input
        type={type}
        id={inputName}
        name={inputName}
        required={!!required}
        placeholder="something some"
        className="peer h-11 w-full pl-4 text-sm bg-[#F4F8FB] border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:input-border-gradient focus:gradient-border-2"
      />
      <label
        htmlFor={inputName}
        className="absolute left-4 -top-0.5 text-primary text-[10px] transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-subText peer-placeholder-shown:top-3.5 peer-focus:-top-0.5 peer-focus:text-primary peer-focus:text-[10px]"
      >
        { label }
      </label>
    </div>
  );
};

export default Input;
