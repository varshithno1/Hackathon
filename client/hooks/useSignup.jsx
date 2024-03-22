import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const setSignup = async (
    username,
    email,
    password,
    confirmPassword,
    setError,
    isUser
  ) => {
    const success = handleInputErrors(
      username,
      email,
      password,
      confirmPassword,
      setError,
      isUser
    );

    if (!success) return;
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3002/api/v1/signup", {
        username,
        email,
        password,
        confirmPassword,
        isUser,
      });

      localStorage.setItem("jwt", response.data.jwt);
      toast.success(response.data.msg);
      setAuthUser(response.data.jwt);
      navigate("/myspace");
    } catch (error) {
      if (error.response) {
        console.log("error1");
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

  return { loading, setSignup };
};
export default useSignup;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
