import React from "react";
import axios from "axios"; // Import axios
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const MySpace = () => {
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const signout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signout"
      );
      localStorage.removeItem("jwt");
      toast.success("Logged out successfully");
      setAuthUser(null);
      navigate("/signin");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred", {
          duration: 600,
        });
      }
    }
  };

  return (
    <div>
      <div>MySpace</div>
      <button onClick={signout}>Logout</button>
    </div>
  );
};

export default MySpace;
