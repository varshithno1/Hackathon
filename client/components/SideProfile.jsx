import React from "react";

const SideProfile = ({ label, icon }) => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center border-2 w-[5vw] h-[5vw] border-black rounded-full">
        <img src={icon} alt="" className="h-15 w-15 align-middle " />
      </div>
    </div>
  );
};

export default SideProfile;
