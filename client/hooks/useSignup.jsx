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
      document.cookie = `jwt=${response.data.jwt}; max-age=${
        15 * 24 * 60 * 60
      }; path=/;`;

      toast.success(response.data.msg);
      setAuthUser(response.data.jwt);
      navigate("/myspace");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg || "An error occurred");
        toast.error(error.response.data.msg || "An error occurred", {
          duration: 600,
        });
      } else if (error.request) {
        setError("No response received from server");
        toast.error("No response received from server", {
          duration: 600,
        });
      } else {
        setError("Error: " + error.msg);
        toast.error("Error: " + error.msg, {
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
