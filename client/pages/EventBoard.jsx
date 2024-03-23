import React from "react";
import MainLeft from "../components/MainLeft";
import Allevents from "../components/Allevents";

const EventBoard = () => {
  return (
    <div className="flex">
      <MainLeft />
      <div className="flex justify-center w-[80vw]">
        <Allevents />
      </div>
    </div>
  );
};

export default EventBoard;
