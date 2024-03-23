import React from "react";
import SideOptions from "./SideOptions";
import SideHeading from "./SideHeading";
import SideProfile from "./SideProfile";
import human from "../src/assets/human.svg";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full p-[2rem]">
      <SideProfile icon={human} />
      <SideHeading label={"General"} />
      <SideOptions
        label={"Events"}
        click={() => {
          navigate("/events");
        }}
      />
      <SideOptions
        label={"Tickets"}
        click={() => {
          navigate("/tickets");
        }}
      />
      <SideOptions label={"Book"} />
    </div>
  );
};

export default Sidebar;
