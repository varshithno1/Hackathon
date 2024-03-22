import React from "react";
import LeftSignup from "../components/LeftSignup";
import RightSignup from "../components/RightSignup";

const Signup = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[80vw] h-screen">
        <LeftSignup />
      </div>
      <div className="w-full flex justify-center px-10 py-5 ">
        <div className="w-full flex justify-center bg-slate-50 rounded-2xl">
          <RightSignup />
        </div>
      </div>
    </div>
  );
};

export default Signup;
