import React from "react";
import RightSignin from "../components/RightSignin";
import LeftSignin from "../components/LeftSignin";

const Signin = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[80vw] h-screen">
        <LeftSignin />
      </div>
      <div className="w-full flex justify-center px-10 py-5 ">
        <div className="w-full flex justify-center bg-slate-50 rounded-2xl">
          <RightSignin />
        </div>
      </div>
    </div>
  );
};

export default Signin;
