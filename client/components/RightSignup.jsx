import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "rsuite";

import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import GoogleIcon from "../components/GoogleIcon";
import Conformation from "../components/Conformation";
import Logo from "../components/Logo";
import InputPassword from "./InputPassword";
import useSignup from "../hooks/useSignup";
import UserInput from "../components/UserInput";

const RightSignup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUser, setIsUser] = useState(true);

  const [error, setError] = useState("");
  const { loading, setSignup } = useSignup();

  const handleChange = (e, inputType) => {
    const value = e.target.value;
    if (inputType === "username") {
      setUsername(value);
    } else if (inputType === "email") {
      setEmail(value);
    } else if (inputType === "password") {
      setPassword(value);
    } else if (inputType === "conPassword") {
      setConfirmPassword(value);
    }
  };

  const handle = (e) => {
    const value = e.target.value;
    setIsUser(value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    await setSignup(
      username,
      email,
      password,
      confirmPassword,
      setError,
      isUser
    );
  };

  return (
    <div className="h-full flex justify-start">
      <div className="flex flex-col justify-around">
        <div>
          <Logo />
        </div>
        <div>
          <Heading label={"Hearty Welcome"} />
          <SubHeading label={"Create your new account"} />
          <div className="flex justify-center">
            {error && <span className="text-red-500 absolute">{error}</span>}{" "}
          </div>
          <InputBox
            head={"Username"}
            holder={"Enter your username *"}
            change={(e) => handleChange(e, "username")}
          />
          <InputBox
            head={"Email"}
            holder={"Enter your email *"}
            change={(e) => handleChange(e, "email")}
          />
          <InputPassword
            head={"Password"}
            holder={"Enter your new password *"}
            change={(e) => handleChange(e, "password")}
          />
          <InputPassword
            head={"Confirm Password"}
            holder={"Confirm your password *"}
            change={(e) => handleChange(e, "conPassword")}
          />
          <UserInput click={(e) => handle(e)} />
          <Button label={"Sign Up"} load={loading} click={handleSignup} />
        </div>
        <div>
          <Conformation
            label={"Already have an account ?"}
            linkText={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSignup;
