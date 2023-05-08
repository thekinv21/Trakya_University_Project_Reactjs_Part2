import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const token = sessionStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/sigin" />;
};
