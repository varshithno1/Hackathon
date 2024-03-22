import React from "react";
import { Link } from "react-router-dom";

const Conformation = ({ label, linkText, to }) => {
  return (
    <div className="py-2 text-lg flex justify-center">
      <div className="text-gray-400">{label}</div>
      <Link to={to} className="underline cursor-pointer pl-1 font-semibold">
        {linkText}
      </Link>
    </div>
  );
};

export default Conformation;
