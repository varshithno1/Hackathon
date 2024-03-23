import React from "react";
import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import MySpace from "../pages/MySpace";
import DashBoard from "../pages/DashBoard";
import MainLeft from "../components/MainLeft";
import EventBoard from "../pages/EventBoard";
import Tickets from "../pages/Tickets";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? <Navigate to="/myspace" /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/myspace"
          element={authUser ? <MySpace /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signin"
          element={authUser ? <Navigate to="/myspace" /> : <Signin />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/myspace" /> : <Signup />}
        />
        <Route path="/events" element={<EventBoard />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/" element={<MainLeft />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
