import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import InputPassword from "../components/InputPassword";
import Remember from "../components/Remember";
import Button from "../components/Button";
import GoogleIcon from "../components/GoogleIcon";
import Conformation from "../components/Conformation";
import Logo from "../components/Logo";
import useSignin from "../hooks/useSignin";

const RightSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loading, setSignin } = useSignin();

  const handleChange = (e, inputType) => {
    const value = e.target.value;
    if (inputType === "email") {
      setEmail(value);
    } else if (inputType === "password") {
      setPassword(value);
    }
  };

  //! Don't Delete
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/v1/user/signin",
  //       {
  //         email,
  //         password,
  //       }
  //     );
  //     // toast.success(response.data);
  //     localStorage.setItem("jwt", response.data.jwt);
  //     navigate("/myspace");
  //   } catch (error) {
  //     if (error.response) {
  //       setError(error.response.data.message || "An error occurred");
  //       toast.error(error.response.data.message || "An error occurred", {
  //         duration: 600,
  //       });
  //     } else if (error.request) {
  //       setError("No response received from server");
  //       toast.error("No response received from server", {
  //         duration: 600,
  //       });
  //     } else {
  //       setError("Error: " + error.message);
  //       toast.error("Error: " + error.message, {
  //         duration: 600,
  //       });
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setSignin(email, password, setError);
  };

  return (
    <div className="h-full flex justify-start">
      <div className="flex flex-col justify-around">
        <div>
          <Logo />
        </div>
        <div>
          <Heading label={"Welcome Back"} />
          <SubHeading
            label={"Enter your email and password to access your account"}
          />
          <div className="flex justify-center">
            {error && <span className="text-red-500 absolute">{error}</span>}{" "}
          </div>
          <InputBox
            head={"Email"}
            holder={"Enter your email *"}
            change={(e) => handleChange(e, "email")}
          />
          <InputPassword
            head={"Password"}
            holder={"Enter your password *"}
            change={(e) => handleChange(e, "password")}
          />
          <Button label={"Sign In"} click={handleSubmit} />
        </div>
        <div>
          <Conformation
            label={"Don't have an account? "}
            linkText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSignin;
