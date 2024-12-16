import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
  const userInfo = localStorage.getItem("user");
  return userInfo ? <Outlet /> : <Navigate to={"/login"} replace></Navigate>;
};
export default AdminRoute;
