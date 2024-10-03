import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const { token } = useSelector((state) => state.auth.token) || {};

  // console.log(token, "kkk");
  // const token = localStorage.getItem("token");
  const token = true;

  return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
