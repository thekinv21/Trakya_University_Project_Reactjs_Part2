import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
};
