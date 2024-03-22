import React from "react";
const InputBox = ({ head, holder, change }) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="font-ibm font-normal text-xl tracking-tight">{head}</div>
      <input
        type="text"
        onChange={change}
        placeholder={holder}
        className="font-ibm font-light text-sm p-3 bg-inputColor rounded-lg placeholder-slate-800 border-gray-700 focus:border-gray-500"
      />
    </div>
  );
};

export default InputBox;
