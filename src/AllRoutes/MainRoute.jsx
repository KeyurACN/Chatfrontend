import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
import { Signup } from "./../pages/Signup";
import Login from "./../pages/Login";

export const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Home />} />
      </Routes>
    </>
  );
};
