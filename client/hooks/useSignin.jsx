import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const setSignin = async (email, password, setError) => {
    const success = handleInputErrors(email, password);
    if (!success) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3002/api/v1/user/signin",
        {
          email,
          password,
        }
      );
      localStorage.setItem("jwt", response.data.jwt);
      setAuthUser(response.data.jwt);
      toast.success(response.data.msg);
      navigate("/myspace");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "An error occurred");
        toast.error(error.response.data.message || "An error occurred", {
          duration: 600,
        });
      } else if (error.request) {
        setError("No response received from server");
        toast.error("No response received from server", {
          duration: 600,
        });
      } else {
        setError("Error: " + error.message);
        toast.error("Error: " + error.message, {
          duration: 600,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, setSignin };
};
export default useSignin;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
