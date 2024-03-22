import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

const InputPassword = ({ head, holder, change }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="font-ibm font-normal text-xl tracking-tight">{head}</div>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          onChange={change}
          placeholder={holder}
          className="font-ibm w-full font-light text-sm p-3 bg-inputColor rounded-lg placeholder-slate-800 border-gray-700 focus:border-gray-500"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-3 flex items-center"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeOffIcon className="h-6 w-6 text-gray-400" />
          ) : (
            <EyeIcon className="h-6 w-6 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default InputPassword;
