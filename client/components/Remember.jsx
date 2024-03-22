import React from "react";
import { Link } from "react-router-dom";

const Remember = () => {
  return (
    <div className="flex justify-between mt-4">
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="rem" className="rounded-xl h-5 w-5" />
        <label htmlFor="rem">Remember me</label>
      </div>
      <div>
        <Link to={"/reset-password"}>Forget Password ?</Link>
      </div>
    </div>
  );
};

export default Remember;
